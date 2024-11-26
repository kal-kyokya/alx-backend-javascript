// This file is a program that processes user's command line input

const { stdout } = process;
stdout.write('Welcome to Holberton School, what is your name?\n');

const { stdin } = process;

stdin.on('readable', () => {
  const input = stdin.read();

  if (input !== null && input.length > 1) {
    stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  stdout.write('This important software is now closing\n');
});
