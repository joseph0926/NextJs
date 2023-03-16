import { buildFeedbackPath, extractFeedback } from "./feedback";

const handler = (req, res) => {
  const feedbackId = req.query.feedbackId;

  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find((feedback) => {
    return feedback.id === feedbackId;
  });

  res.status(200).json({ message: "동적 API 라우트 성공!", feedback: selectedFeedback });
};

export default handler;
