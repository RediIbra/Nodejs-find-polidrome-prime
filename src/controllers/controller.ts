import { Request, Response, NextFunction } from "express";
import { filterNumbers, areAllNumbers } from "../utils/filterNumbers";
import { ExtendedRequest } from "../app";

export const postNumbers = async (req: ExtendedRequest, res: Response) => {
  const startTime: Date =
    req.startTime instanceof Date ? req.startTime : new Date();
  const numbers = req.body.numbers;
  const checkForString = areAllNumbers(numbers);
  const hasZeroOrLess = numbers.some((num: number) => num <= 0);

  //Check if it is empty
  if (!numbers.length) {
    res.status(400).json({ error: "Please insert at least one number" });
  } else if (!checkForString) {
    //Check if the array contain strings also you cant put sring to make SQL injections
    res.status(400).json({ error: "Please put only numbers" });
  } else if (!hasZeroOrLess && numbers.length) {
    try {
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);
      const palindromeNumbers = filterNumbers(numbers, "palindrome");
      const primeNumbers = filterNumbers(numbers, "prime");
      const palidromAndPrime = [[...palindromeNumbers], [...primeNumbers]];
      const endTime: Date = new Date();
      const duration = endTime.getTime() - startTime.getTime();
      res.status(200).json({
        timeOfExecution: duration + "ms",
        datas: {
          palindromeNumbers: palindromeNumbers,
          primeNumbers: primeNumbers,
          palidromAndPrime: palidromAndPrime,
          max: max,
          min: min,
        },
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  } else {
    res.status(400).json({ error: "You cant put numbers equal to 0 or less" });
  }
};
