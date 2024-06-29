import React, { useEffect } from "react";
import { useCalc } from "../Context/CalcContext";

function Button({ value, onclick, ...props }) {
  const { calc, setCalc, res, setRes } = useCalc();

  useEffect(() => {
    function evaluate(expression) {
      if (!expression) return 0;

      let tokens = expression.match(/(\d+(\.\d+)?|[-+*/()])/g);
      if (!tokens) return 0;

      let values = [];
      let ops = [];

      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === " ") continue;

        if (!isNaN(tokens[i])) {
          values.push(parseFloat(tokens[i]));
        } else if (tokens[i] === "(") {
          ops.push(tokens[i]);
        } else if (tokens[i] === ")") {
          while (ops[ops.length - 1] !== "(") {
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
          }
          ops.pop();
        } else if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
          while (ops.length > 0 && hasPrecedence(tokens[i], ops[ops.length - 1])) {
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
          }
          ops.push(tokens[i]);
        }
      }

      while (ops.length > 0) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }

      return values.pop();
    }

    function hasPrecedence(op1, op2) {
      if (op2 === "(" || op2 === ")") {
        return false;
      }
      if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
        return false;
      } else {
        return true;
      }
    }

    function applyOp(op, b, a) {
      switch (op) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          if (b === 0) {
            setRes("Cannot divide by zero");
            return NaN;
          }
          return a / b;
        default:
          return 0;
      }
    }

    if (calc) {
      let d = evaluate(calc);
      if (!isNaN(d)) setRes(d.toString());
    }
  }, [calc]);

  const dynoClass = value === "=" || value === "+" || value === "-" || value === "*" || value === "/" ? "bg-[#FE9505]" : "";
  const signClass = value === "=" ? "w-[128px]" : "";
  const otherSigns = value === "C" || value === "+-" || value === "DEL" ? "bg-[#A5A5A5] text-black font-semibold hover:text-white hover:font-bold" : "";

  const handleClick = () => {
    if (value === "C") {
      setCalc("");
      setRes("");
    } else if (value === "+-") {
      if (res[0] !== "-" && res.length !== 0) {
        setRes("-" + res);
        setCalc("-" + calc);
      } else {
        setRes(res.substring(1));
        setCalc(calc.substring(1));
      }
    } else if (value === "DEL") {
      setCalc(calc.substring(0, calc.length - 1));
      setRes(res.substring(0, res.length - 1));
    } else if (value === "=") {
      setCalc(res.toString());
      setRes("");
    } else if (value === ".") {
      const parts = calc.split(/[-+*/]/);
      if (parts[parts.length - 1].indexOf('.') === -1) {
        setCalc(calc + value);
      }
    } else {
      setCalc(calc + value);
    }
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`bg-[#333333] text-white rounded-full hover:font-semibold hover:p-[15px] hover:border box-border p-4 text-2xl ${dynoClass} ${signClass} ${otherSigns}`}
    >
      {value}
    </button>
  );
}

export default Button;
