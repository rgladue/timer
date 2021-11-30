const alarm = process.argv.slice(2);
if (alarm.length === 0) {
  return;
}
for (const input of alarm) {
  let sec = parseInt(input, 10);
  if (sec > 0) {
    let time = (sec * 1000);
    setTimeout(function() {
      process.stdout.write('\x07');
    }, (time));
  }
}