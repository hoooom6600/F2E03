import { drizzle } from "drizzle-orm/node-postgres"; // 資料庫連線
import pg from "pg";
import config from "./index.js";
import * as schema from "../db/schema.js";

// 連線池
const { Pool } = pg;

// 建立連線池
const pool = new Pool({
  connectionString: config.databaseUrl,
});

// 建立 drizzle 服務端，傳入連線池與 schema
const db = drizzle(pool, { schema });

export default db;
