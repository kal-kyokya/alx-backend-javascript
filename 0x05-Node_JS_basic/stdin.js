// This file is a program that processes user's command line input

const stdout = process.stdout;
stdout.write('Welcome to Holberton School, what is your name?\n');

const stdin = process.stdin;

stdin.on('data', (name) => {
  stdout.write(`Your name is: ${name}`);

  process.exit('This important software is now closing\n');
})
