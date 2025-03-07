export const formatVoteAverage = (voteAverage: number | undefined) => {
  if (Number.isNaN(voteAverage) || !voteAverage) {
    return '-';
  }
  return voteAverage.toFixed(1);
};
