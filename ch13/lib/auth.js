import { hash, compare } from "bcryptjs";
import { getSession } from "next-auth/react";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const getSessionFn = async () => {
  const session = await getSession();
  return session;
};
