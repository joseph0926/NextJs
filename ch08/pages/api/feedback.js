import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};
export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.feedback;

    const newFeedBack = {
      id: new Date().toISOString(),
      email,
      text: feedbackText,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "파일 저장 성공!", feedback: newFeedBack });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ message: "파일 불러오기 성공!", feedback: data });
  }
};

export default handler;
