import debug from "debug";
import { spawn } from "child_process";

const log = debug('@@system')

const system = (command = "", options = {}) =>
  new Promise((resolve, reject) => {
    const args = command.split(" ");
    // TODO Make this operation non-mutating
    const executable = args.shift();
    const process = spawn(executable, args, options);

    process.stdout.on("data", data => {
      log(`stdout: ${data}`);
    });

    process.stderr.on("data", data => {
      log(`stderr: ${data}`);
      reject(data);
    });

    process.on("close", code => {
      log(`child process exited with code ${code}`);
      resolve(code);
    });
  });

export default system;
