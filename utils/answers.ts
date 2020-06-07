// source: https//gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
export function scrambledAnswer(answer: string | number): number {
  if (typeof answer == "number") {
    answer = answer.toString();
  }
  for (var i = 0, h = 0; i < answer.length; i++)
    h = (Math.imul(31, h) + answer.charCodeAt(i)) | 0;
  return h;
}
