var mudder = require('mudder');

let compare = (a, b) => {
  if (a == b) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
}

let sort = (array, key) => {
  let sortedArray = array.sort((a, b) => {
    return compare(a[key], b[key]);
  });
  return sortedArray;
};

let getNumberBetween = (min, max) => {
  let mudderList = mudder.base62.mudder(min, max, 1000);

  let randomIndex = Math.floor(Math.random() * (mudderList.length/5)) + Math.floor(mudderList.length/5 * 2);

  return mudderList[randomIndex];
}

let getPrevSortValue = (firstSortValue) => {
  return mudder.base62.mudder('', firstSortValue, 100)[99];
}

export { compare, sort, getNumberBetween, getPrevSortValue };