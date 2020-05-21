module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let { enhancement } = item;
  if (enhancement === 20) {
    return {
      ...item,
      enhancement: 20,
    };
  } else {
    return {
      ...item,
      enhancement: enhancement + 1,
    };
  }
}

function fail(item) {
  let { enhancement, durability } = item;
  if (enhancement < 15) {
    return { ...item, durability: durability - 5 };
  } else if (enhancement >= 15) {
    return { ...item, durability: durability - 10 };
  } else if (enhancement > 16) {
    return { ...item, enhancement: enhancement - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
