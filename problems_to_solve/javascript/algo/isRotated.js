function isRotated(a, b) {
  if ((!a || !b) || a.length !== b.length ) return false;

  let c = a + a 
  return c.includes(b)
}

console.log(isRotated('canada', 'dacana'))