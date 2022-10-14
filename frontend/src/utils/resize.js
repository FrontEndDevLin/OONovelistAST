let repaintTime = 200; // 200ms
let repaintTimer = null;

function initWinWidth() {
  localStorage.setItem("lastCW", document.body.clientWidth);
  localStorage.setItem("lastCH", document.body.clientHeight);
}

// initWinWidth();

let fnList = {};

window.onresize = () => {
  // 节流
  if (repaintTimer) return;
  repaintTimer = setTimeout(() => {
    initWinWidth();
    for (let fn in fnList) {
      fnList[fn]();
    }
    clearTimeout(repaintTimer);
    repaintTimer = null;
  }, repaintTime);
};

window.addResizeEvent = (fnName, fn) => {
  fnList[fnName] = fn;
}
window.removeResizeEvent = (fnName) => {
  delete fnList[fnName];
}