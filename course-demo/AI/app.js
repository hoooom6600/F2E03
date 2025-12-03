import { GoogleGenAI } from "@google/genai"; // 記得先改 package.json 的 type 為 module

const ai = new GoogleGenAI({}); // 假設已設定環境變數 GEMINI_API_KEY

// 是一個 Promise，所以要 await
const resp = await ai.models.generateContent({
  model: "gemini-2.5-flash", // 2.5 = 版本；flash = 快速版；pro = 想比較慢，但貴，額度也少
  contents: "你跟Google的關係是什麼？", // 想問的問題
});

console.log(resp.text); // 屬性名稱要看手冊，不是自己隨便掰的
