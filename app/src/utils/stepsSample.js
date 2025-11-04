export function seededRand(seed) {
  let x = Math.sin(Number(seed) || 0) * 10000;
  return x - Math.floor(x);
}

// 500–15000
export function sampleSteps(seed) {
  const r = seededRand(seed);
  return Math.round(500 + r * (15000 - 500));
}


