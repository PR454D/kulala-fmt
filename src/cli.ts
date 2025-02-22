import pkg from "./../package.json";
import { Command } from "commander";
import { check, format } from "./lib/parser";
const program = new Command();

program
  .name("kulala-fmt")
  .description(
    "An opinionated 🦄 .http and .rest 🐼 files linter 💄 and formatter ⚡.",
  )
  .version(pkg.version);

program
  .command("format")
  .description("Format files")
  .argument("[files]", "files to include", null)
  .action((files) => {
    format(files);
  });

program
  .command("check")
  .description("Check if files are well formatted")
  .argument("[files]", "files to include", null)
  .option("-v, --verbose", "enable verbose mode", false)
  .action((files, options) => {
    check(options.verbose, files);
  });

program.parse();
