/** Posterior mean of a Beta(1,1) prior after observing votes. */
export function validityScore(worked: number, failed: number): number {
  return (1 + worked) / (2 + worked + failed);
}
