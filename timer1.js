const alarm = (time) =>{
  if (time === Number(time) && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  } else {
    process.stdout.write('NaN');
  }
};

// Accepts input from the terminal
const args = process.argv.slice(2);

// Call the alarm function and the argument recieved from the user
for (let i = 0; i < args.length; i++) {
  alarm(parseInt(args[i]));
}
