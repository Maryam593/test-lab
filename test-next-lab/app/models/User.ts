import { DataTypes } from 'sequelize';
import sequelize from '../utlis/dbConnect';

const User = sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: true });

export default User;