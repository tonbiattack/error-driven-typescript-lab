export function rankedScores(scores: number[]): number[] {
  return [...scores].sort((left, right) => right - left);
}
