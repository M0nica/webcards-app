import { scrambledAnswer } from "../../utils/answers";

const answers = [
  {
    question: "4**2 equals ____",
    description: "",
    choices: [8, 16, 6, 4],
    correctChoice: scrambledAnswer(16),
  },
  {
    question: "Can functional React components maintain their own state?",
    description: "Note: this is in React 16.8+",
    choices: [
      "No, only class-based functions can maintain state",
      "Yes, with React Hooks",
    ],
    correctChoice: scrambledAnswer("Yes, with React Hooks"),
  },
];

export default function handler(req, res) {
  res.status(200).json(answers);
}
