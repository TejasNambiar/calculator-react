const CalculateResult = (value) => {
    try {
      const operators = ["+", "-", "*", "/"];
      let operator = null;
  
      for (let char of value) {
        if (operators.includes(char)) {
          operator = char;
          break;
        }
      }
  
      if (!operator) {
        return { input: parseFloat(value).toString() };
      }
  
      const [operand1, operand2] = value.split(operator).map(parseFloat);
  
      let result;
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        default:
          throw new Error("Invalid Operator");
      }
  
      return { input: result.toString() };
    } catch (error) {
      return { input: "Error" };
    }
  };
  
  export default CalculateResult;
