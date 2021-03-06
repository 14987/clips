import mongoose from "mongoose";
const UserPlaylist = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default new mongoose.model("UserPlaylist", UserPlaylist);
