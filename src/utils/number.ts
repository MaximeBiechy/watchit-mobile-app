export const formatVoteAverage = (voteAverage: number | null | undefined) => {
  if (Number.isNaN(voteAverage) || voteAverage === null || voteAverage === undefined) {
    return '-';
  }
  return voteAverage.toFixed(1);
};
