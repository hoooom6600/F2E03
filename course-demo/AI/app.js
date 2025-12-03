import { GoogleGenAI } from "@google/genai"; // 記得先改 package.json 的 type 為 module
import { input } from "@inquirer/prompts";
import ora from "ora";

const ai = new GoogleGenAI({}); // 假設已設定環境變數 GEMINI_API_KEY
const spinner = ora("思考中...");

// 等待輸入是一個 Promise ，要 await
let question = await input({ message: "->" });
while (question.trim() != "") {
  if (question == "exit") {
    break;
  }

  spinner.start();

  // 是一個 Promise，所以要 await
  const resp = await ai.models.generateContent({
    model: "gemini-2.5-flash", // 2.5 = 版本；flash = 快速版；pro = 想比較慢，但貴，額度也少
    contents: question, // 想問的問題
    // 設定 AI 人設
    config: {
      systemInstruction:
        "不管任何情況，一律用臺灣繁體中文回答。語氣很兇，沒有同理心，不會有任何情緒價值，句點王",
    },
  });
  spinner.stop();
  console.log(resp.text); // 屬性名稱要看手冊，不是自己隨便掰的

  question = await input({ message: "->" });
}
