function progressDays(days) {
  let miles = 0;
  let progress = 0;
  for (i = 0; i < days.length; i++) {
    if (days[i] > miles) {
      miles = days[i];
      progress++;
    }
  }
  return progress;
}