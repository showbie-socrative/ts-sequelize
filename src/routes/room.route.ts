import { Router } from "express";
import { roomRepository } from "../repository";

export const roomRouterFactory = () =>
  Router()
    .get("/rooms", (req, res, next) => {
      return roomRepository
        .findAll()
        .then((room) => res.json(room))
        .catch(next);
    })

    .get("/rooms/:id", (req, res, next) => {
      roomRepository
        .findOne({ where: { id: req.params.id } })
        .then((room) => (room ? res.json(room) : next({ statusCode: 404 })))
        .catch(next);
    });
