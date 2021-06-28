import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end(); // Validar se token está preenchido
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "4b8552307e0b325da897986471b1180b"
    ) as IPayload;

    request.user_id = sub; // Recuperar informações do usuário

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
