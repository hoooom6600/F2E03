import "dotenv/config";

const config = {
  port: process.env.PORT || 3000, // 取得環境變數的 port 變數，若無環境變數，則預設 3000
  databaseUrl: process.env.DATABASE_URL,
};

export default config;
