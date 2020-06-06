// source: https//gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
export function scrambledAnswer(answer: string | number): number {
  if (typeof answer == "number") {
    answer = answer.toString();
  }
  for (var i = 0, h = 0; i < answer.length; i++)
    h = (Math.imul(31, h) + answer.charCodeAt(i)) | 0;
  return h;
}

export const questions = [
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
