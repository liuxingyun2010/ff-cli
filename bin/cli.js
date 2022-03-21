#! /usr/bin/env node

const chalk = require("chalk");
const program = require("commander");
const create = require("../lib/create");
const figlet = require("figlet");

program
  .command("create <app-name>")
  .description("create a new app")
  .option("-f --force", "overwrite target directory if it exists")
  .action((name, options) => {
    create(name, options);
  });

program
  .version(`v${require("../package.json").version}`, "-v --version")
  .usage("<command> [option]");

program.on("--help", () => {
  console.log(
    `\r\n` +
      figlet.textSync("ffe", {
        font: "Ghost",
        width: 80,
        whitespaceBreak: true,
        horizontalLayout: "default",
        verticalLayout: "default",
      })
  );

  console.log(
    `\r\nRun ${chalk.cyan(
      "ffe <commander> --help"
    )} for detailed usage of given command`
  );
});

program.parse(process.argv);
