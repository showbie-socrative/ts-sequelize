import { json } from "body-parser";
import * as express from "express";
import * as strongErrorHandler from "strong-error-handler";
import { roomRouterFactory, studentRouterFactory } from "./routes";

export const app = express();

app.use(json());

app.use(roomRouterFactory());
app.use(studentRouterFactory());

app.use(
  strongErrorHandler({
    debug: true
  })
);
