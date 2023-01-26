function totalVolume(boxes) {
  // first we map through the boxes to find the volume of each box
  // then we reduce the remaing array to add them all up and return a single value
  return (boxes.map(([a,b,c]) => (a*b*c))).reduce((a,b) => a+b);
}