import { Router } from "express";
import { studentRepository } from "../repository";

export const studentRouterFactory = () =>
  Router().get("/students", (req, res, next) =>
    studentRepository
      .findAll()
      .then((students) => res.json(students))
      .catch(next)
  );
