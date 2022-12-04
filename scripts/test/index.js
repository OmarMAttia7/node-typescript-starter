import { exec } from "child_process";
import { sep } from "path";


async function main() {
  await preTest();
  await testScript();
  await postTest();
}


async function preTest() {
  console.log("pre-test process");
}

async function postTest() {
  console.log("post-test process");
}

function testScript() {
  const testProcess = exec(`node scripts${sep}test${sep}jasmine`);

  testProcess.stdout.pipe(process.stdout);
  testProcess.stderr.pipe(process.stderr);

  return new Promise((resolve) => {
    testProcess.on("exit", (exitCode) => resolve(exitCode));
  });
}

main();