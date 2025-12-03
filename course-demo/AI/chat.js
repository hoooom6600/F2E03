import { input } from "@inquirer/prompts";
import ora from "ora";

const spinner = ora("思考中...");

// 等待輸入是一個 Promise ，要 await
const q1 = await input({ message: "你是誰？" });
const q2 = await input({ message: "你是哪個國家的人？" });

spinner.start();
setTimeout(() => {
  spinner.stop();
  console.log(q1, q2);
}, 5000);
