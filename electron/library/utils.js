
function buildId() {
  return Date.now() + getRandomStr();
}

function getRandomStr(length = 6) {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += parseInt(Math.random() * 10);
  }
  return str;
}

module.exports = {
  buildId
}