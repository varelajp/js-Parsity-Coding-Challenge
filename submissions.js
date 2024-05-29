const findSum = function (array) {
  return array.reduce((acum, val) => acum + val, 0);
};

const findFrequency = function (array) {
  const map = new Map();

  for (const val of array) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  }

  const max = Math.max(...map.values());
  const min = Math.min(...map.values());
  const maxKey = [...map].find(([, v]) => v === max)[0];
  const minKey = [...map].find(([, v]) => v === min)[0];

  return { most: maxKey, least: minKey };
};

const isPalindrome = function (str) {
  if (str.length < 2) {
    return true;
  }

  const firstHalf = str.toLowerCase().substring(0, Math.ceil(str.length / 2));
  const secondhalf = str.toLowerCase().substring(Math.floor(str.length / 2));

  return firstHalf === secondhalf.split('').reverse().join('');
};

const largestPair = function (array) {
  if (array.length < 2) {
    return 0;
  }

  let maxProduct = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length - 2; i++) {
    const product = array[i] * array[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};

const removeParenth = function (str) {
  const openParenth = str.indexOf('(');
  const closeParenth = str.indexOf(')', openParenth + 1);

  return str.substring(0, openParenth) + str.substring(closeParenth + 1);
};

const scoreScrabble = function (str) {
  if (str.length === 0) {
    return 0;
  }

  const value = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  }
  let score = 0;

  for (const char of str) {
    score += value[char.toLowerCase()];
  }

  return score;
};
