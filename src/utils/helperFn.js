export const uniqueArryFn = (array, id) => {
  if (!array) {
    return 0;
  }
  let resultArry = [...array];
  if (array.find((e) => e === id)) {
    resultArry = resultArry.filter((e) => e !== id);
  } else {
    resultArry.push(id);
  }
  return resultArry;
};

export const getDay = (start, end) => {
  let oneDay = 1000 * 60 * 60 * 24;
  let difference = new Date(end) - new Date(start);
  if (difference < 1) {
    return 0;
  }
  return Math.round(difference / oneDay);
};
