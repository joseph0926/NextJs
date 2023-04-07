import jwt from "jsonwebtoken";
import prisma from "./prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { ACCESS_TOKEN: token } = req.cookies;
    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "secretjwt");
        user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
        if (!user) {
          throw new Error("가입되어있지 않은 사용자입니다.");
        }
      } catch (error) {
        res.status(401).json({ error: "유효하지 않은 인증입니다." });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401).json({ error: "유효하지 않은 인증입니다." });
  };
};
