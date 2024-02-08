import e, { Request, Response } from "express";
import { z } from "zod";

import { db } from "../db/prismaClient";

const createUserBodySchema = z.object({
  name: z
    .string()
    .min(3)
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  lastName: z
    .string()
    .min(3)
    .transform((lastName) => {
      return lastName
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z.string().toLowerCase().trim().email(),
  password: z.string().min(1).trim(),
  CPF: z
    .string()
    .trim()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
});

export class UserController {
  async handle(request: Request, response: Response) {
    const body = request.body;
    try {
      const { CPF, email, lastName, name, password } =
        createUserBodySchema.parse(body);
      return response
        .status(200)
        .json({ CPF, email, lastName, name, password });
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}
