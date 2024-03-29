import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import palindromeRoutes from "./routes/routes";

const app = express();
export interface ExtendedRequest extends Request {
  startTime?: Date;
}

app.use(json());
// Set security HTTP headers
app.use(helmet());
// Development logging
app.use(morgan("dev"));

const logTimeMiddleware = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  req.startTime = new Date();
  next();
};

app.use("/api/v1", logTimeMiddleware, palindromeRoutes);

app.listen(7007, () => {
  console.log(`Server is running on port 7007`);
});
