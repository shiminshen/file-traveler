// lib/mathplusplus.js
export * from "./math";
export var e = 2.71828182846;
export default function(x) {
  return Math.log(x);
}

function sleep(ms = 1000) {
  return new Promise(r => setTimeout(r, ms));
}

export async function asyncFunc() {
  console.log('Sleep 1s');
  await sleep(1000);
  console.log('Wakeup');
}

