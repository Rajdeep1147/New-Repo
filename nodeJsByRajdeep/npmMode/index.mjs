import chalk from "chalk";
import validator from "validator";

console.log(chalk.blue("Hello world!"));

console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

const email = validator.isEmail("rajdeep@allheartweb.com");
console.log(email ? chalk.green.inverse(email) : chalk.red.inverse(email));
