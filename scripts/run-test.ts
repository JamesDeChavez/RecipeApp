const args_script = ["test"];
const opts_script = { stdio: "inherit", cwd: "client", shell: true };
require("child_process").spawn("npm", args_script, opts_script);