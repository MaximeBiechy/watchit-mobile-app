export const formatVoteAverage = (voteAverage: number | null | undefined) => {
  if (Number.isNaN(voteAverage) || !voteAverage) {
    return '-';
  }
  return voteAverage.toFixed(1);
};
