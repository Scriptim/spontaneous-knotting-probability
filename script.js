const n0 = 0.55
const l0 = 3.4
const b = -2.9

function probability(l) {
  l *= 25 / 64 // cm -> inch
  return n0 / (1 + Math.pow(l / l0, b))
}
