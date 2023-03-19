import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/db";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectDatabase();
        const userCollection = client.db().collection("user");
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("해당 이메일로 가입된 정보를 찾을 수 없습니다");
        }

        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) {
          throw new Error("비밀번호가 일치하지 않습니다");
        }

        return { email: user.email };
      },
    }),
  ],
});
