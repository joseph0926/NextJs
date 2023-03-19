import { hashPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const reqData = req.body;
  const { email, password } = reqData;

  if (!email || !email.includes("@") || !password || password.trim().length < 7) {
    res.status(422).json({ message: "유효하지 않은 입력값입니다 - 비밀번호는 최소 8자리 이상이여야 합니다." });
    return;
  }

  const client = await connectDatabase();
  const db = client.db();

  const existingUser = await db.collection("user").findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "이미 존재하는 이메일입니다." });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("user").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "유저 생성 성공!" });
};

export default handler;
