import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: "Invalid email format",
    },
  },
  password: { required: true, type: String },
  createdAt: { required: true, type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

export default User;
