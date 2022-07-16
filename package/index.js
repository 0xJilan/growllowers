const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};

const getRemainingWeeks = (actualDay) => {
  return Math.floor(actualDay / 7);
};

const getFollowersByEndOfYear = (
  actualFollowers = 1,
  weeklyPercentGrowth = 1
) => {
  const actualDay = getDayOfTheYear();
  const remainingWeeks = getRemainingWeeks(actualDay);
  const percentOfGrowth = 1 + weeklyPercentGrowth / 100;
  let index = 0;
  let followers = actualFollowers;

  while (index <= remainingWeeks) {
    index++;
    followers = followers * percentOfGrowth;
  }

  return Math.floor(followers);
};

export default getFollowersByEndOfYear;
