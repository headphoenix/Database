import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {
    totalMembers: Number,
    totalMembers: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalMembership: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalMembership: Number,
      },
    ],
  },
  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;