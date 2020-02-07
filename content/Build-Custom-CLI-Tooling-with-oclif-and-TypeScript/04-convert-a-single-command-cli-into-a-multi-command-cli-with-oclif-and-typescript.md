---
title: "04. Convert a Single Command CLI into a Multi Command CLI with Oclif and TypeScript"
metaTitle: "Convert a Single Command CLI into a Multi Command CLI with Oclif and TypeScript"
metaDescription: "Heavy duty CLI's like gatsby and npm do more than one thing. The convention is to namespace them with a command name after the CLI name, like gatsby new or gatsby build or npm install or npm uninstall."
---

## Notes

You can run npx oclif multi mycli to start a new CLI that is multi by default.

```typescript
import { Command, flags } from "@oclif/command";

class Mycli extends Command {
  static description = "describe the command here";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Mycli);
    // console.log(argv)
    const name = flags.name || "world";
    this.log(`hello egghead ${name} from ./src/index.ts`);
  }
}

export = Mycli;
```

The result of refactored a single command CLI into a multi command CLI:

```typescript
import { Command, flags } from "@oclif/command";

class Mycli extends Command {
  static description = "describe the command here";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Mycli);
    console.log("hello from build");
    const name = flags.name || "world";
    this.log(`hello egghead ${name} from ./src/index.ts`);
  }
}

export = Mycli;
```

Creating a multi-command CLI:

```shell
$ npx oclif multi mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run --version
mynewcli/0.0.0 darwin-x64 node-v9.5.0
$ ./bin/run --help
USAGE
  $ mynewcli [COMMAND]

COMMANDS
  hello
  help   display help for mynewcli

$ ./bin/run hello
hello world from ./src/hello.js!
```

## Personal Take

Sometimes, we want to share logic or share initialization code for more than one command. One pattern that you can do is to have a common base command at the top level where you import that command. You use a base command that you extend directly.
