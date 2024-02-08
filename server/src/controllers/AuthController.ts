import { Request, Response } from "express";
import { compare } from "bcrypt";
import { z } from "zod";
import { db } from "../db/prismaClient";
import { GenerateTokenProvider } from "../providers/GenerateTokenProvider";

const authBodySchema = z.object({
  email: z.string().toLowerCase().trim().email(),
  password: z.string().trim().min(1),
});

type AuthBodySchema = z.infer<typeof authBodySchema>;

export class AuthController {
  async handle(request: Request<{}, {}, AuthBodySchema>, response: Response) {
    const body = request.body;

    try {
      const { email, password } = authBodySchema.parse({
        email: body.email,
        password: body.password,
      });
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (user) {
        const pass = compare(password, user.password);
        if (!pass) {
          return response
            .status(400)
            .json({ result: "Senha ou e-mail inválido" });
        }
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(user.id);
        const currentDate = new Date();
        return response
          .cookie("auth_token", token, {
            path: "/",
            signed: true,
            secure: false,
            httpOnly: true,
            expires: new Date(currentDate.setDate(currentDate.getDate() + 1)),
          })
          .status(200)
          .json(token);
      }
    } catch (e) {
      return response.status(400).json(e);
    }
  }
  async check(request: Request, response: Response) {
    const cookieSchema = z.string().trim().min(1);
    console.log("Cookies", request.headers.cookie);
    const { auth_token } = request.headers.cookie;
    console.log(auth_token);
    return response.status(200).json({});
  }
  async logout(request: Request, response: Response) {
    return response.clearCookie("auth_token").status(200).json({});
  }
}
