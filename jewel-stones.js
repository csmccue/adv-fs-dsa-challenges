function runTheJewels(jewels, stones) {
  let count = 0;
  let jewel = '';
  for (i = 0; i < jewels.length; i++) {
    jewel = jewels[i];
    for (j = 0; j < stones.length; j++) {
      if (jewel = stones[i])
      count++;
    }
  }
  return count;
}