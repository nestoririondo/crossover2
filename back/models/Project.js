import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  goal: { required: true, type: Number },
  donations: [
    {
      user: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      amount: { required: true, type: Number },
      date: { required: true, type: Date, default: Date.now },
    },
  ],
  image: { required: true, type: String },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: [{ required: false, type: String }],
  createdAt: { required: true, type: Date, default: Date.now },
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
