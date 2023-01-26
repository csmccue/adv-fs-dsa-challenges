function pluralize(words) {
  let output = [];
  for (i = 0; i < words.length; i++) {
    for (j = 0; j < output.length; j++) {
      if (words[i] === output[j]) {
        output.push(words[i] + 's');
      } else {
        output.push(words[i]);
      }
    }
  }
  return output;
}

// this one is tough need to do more work on it