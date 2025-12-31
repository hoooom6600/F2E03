import db from "./src/config/database.js";
import { usersTable } from "./src/db/schema.js";
import app from "./src/app.js";
import config from "./src/config/index.js";

async function test() {
  try {
    await db.select().from(usersTable);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

test();

const port = config.port;

app.listen(3000, () => {
  console.log(`伺服器運作在: http://localhost:3000`);
});
