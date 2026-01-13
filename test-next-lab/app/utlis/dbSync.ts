import sequelize from "../models/User";

let synced = false;

export async function dbSync() {
  if (!synced) {
    await sequelize.sync();
    synced = true;
  }
}
