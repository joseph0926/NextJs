import { getSession } from "next-auth/react";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "인증된 사용자가 아닙니다." });
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectDatabase();
  const userCollection = client.db().collection("user");

  const user = await userCollection.findOne({ email: userEmail });
  if (!user) {
    res.status(404).json({ message: "입력하신 이메일로 가입된 사용자를 찾을수없습니다" });
    return;
  }

  const currentPassword = user.password;
  const passwordIsEqual = await verifyPassword(oldPassword, currentPassword);
  if (!passwordIsEqual) {
    res.status(403).json({ message: "비밀번호가 일치하지 않습니다" });
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  const result = await userCollection.updateOne({ email: user.email }, { $set: { password: hashedPassword } });

  res.status(200).json({ message: "비밀번호 변경 성공!" });
};

export default handler;
