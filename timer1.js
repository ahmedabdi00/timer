const args = process.argv.slice(2);

const validateAndSetTimeout = (timeInSeconds) => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) {
    // Ignore non-number inputs and negative numbers
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07'); // Beep
  }, timeInSeconds * 1000);
};

for (const arg of args) {
  const timeInSeconds = Number(arg);
  validateAndSetTimeout(timeInSeconds);
}
