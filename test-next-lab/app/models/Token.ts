
import sequelize from "../utlis/dbConnect";
import { DataTypes } from "sequelize";
import User from "./User";
const Token = sequelize.define("Token", {
UserId : { type: DataTypes.INTEGER, allowNull: false },
  token : { type: DataTypes.STRING, allowNull: false }
}, { timestamps: true });   


//Associate Token with User model if needed
Token.belongsTo(require("./User"), { foreignKey: "UserId" });
User.hasMany(Token, { foreignKey: "UserId" });
export default Token