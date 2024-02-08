import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, process.env.APP_KEY as string, {
      subject: userId,
      expiresIn: "1d",
    });

    return token;
  }
}
