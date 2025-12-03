import { GoogleGenAI, Type } from "@google/genai"; // 記得先改 package.json 的 type 為 module
import { input } from "@inquirer/prompts";
import ora from "ora";

// 手刻對話紀錄
// const ai = new GoogleGenAI({}); // 假設已設定環境變數 GEMINI_API_KEY
// const spinner = ora("思考中...");
// const chatHistory = [];

// // 等待輸入是一個 Promise ，要 await
// let question = await input({ message: "->" });
// while (question.trim() != "") {
//   if (question == "exit") {
//     break;
//   }

//   chatHistory.push({ role: "user", parts: [{ text: question }] });
//   spinner.start();

//   // 是一個 Promise，所以要 await
//   const resp = await ai.models.generateContent({
//     model: "gemini-2.5-flash", // 2.5 = 版本；flash = 快速版；pro = 想比較慢，但貴，額度也少
//     contents: question, // 想問的問題
//     // 設定 AI 人設
//     config: {
//       systemInstruction:
//         "不管任何情況，一律用臺灣繁體中文回答。語氣很兇，沒有同理心，不會有任何情緒價值，句點王",
//     },
//   });
//   spinner.stop();

//   chatHistory.push({ role: "model", parts: [{ text: resp.text }] });
//   console.log(chatHistory);
//   console.log(resp.text); // 屬性名稱要看手冊，不是自己隨便掰的

//   question = await input({ message: "->" });
// }

// 用 gemini 內建方法紀錄對話

// 製作工具與工具的參數及方法
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getDatetimeTool = {
  name: "get_current_datetime",
  description: "取得現在的日期與時間",
};

function getCurrentDateTime() {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Taipei",
  });
}

function getWeather(city, location) {
  const results = ["晴", "雨", "颱風"];
  return { temp: Math.random() * 30 + 10, weather: results[getRandomInt(2)] };
}

function getCalendar(date) {
  return [];
}

const getCalendarTool = {
  name: "get_calendar",
  description: "查詢行事曆",
  // 工具參數
  parameters: {
    type: Type.OBJECT,
    properties: {
      date: {
        type: Type.STRING,
        description: "日期",
      },
    },
    required: ["date"],
  },
};

const getWeatherTool = {
  name: "get_weather",
  description: "取得天氣資訊",
  // 工具參數
  parameters: {
    type: Type.OBJECT,
    properties: {
      city: {
        type: Type.STRING,
        description: "城市名稱，例如台北或東京",
      },
      location: {
        type: Type.STRING,
        description: "地址",
      },
    },
    required: ["city"],
  },
};

const ai = new GoogleGenAI({});
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  config: {
    systemInstruction: "回答一律使用台灣繁體中文",
    tools: [
      {
        // 依 prompt 觸發相關工具
        functionDeclarations: [
          getDatetimeTool,
          getWeatherTool,
          getCalendarTool,
        ],
      },
    ],
  },
});

const spinner = ora("思考中..");

let question = await input({ message: "->" });
while (question.trim() != "") {
  if (question == "exit") {
    break;
  }

  spinner.start();
  const resp = await chat.sendMessage({ message: question });
  spinner.stop();

  if (resp.functionCalls?.length > 0) {
    // 執行！ 使用工具
    const result = resp.functionCalls.map((fc) => {
      switch (fc.name) {
        case "get_current_datetime":
          return getCurrentDateTime();
        case "get_calendar":
          return getCalendar(fc.args.date);
        case "get_weather":
          return getWeather(fc.args.city, fc.args.location);
      }
    });
    // console.log(result);

    // 把查詢結果 → 人話
    const finalResp = await chat.sendMessage({
      message: JSON.stringify(result),
    });
    console.log(finalResp.text);
  } else {
    console.log(resp.text);
  }

  question = await input({ message: "->" });
}
