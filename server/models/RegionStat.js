import mongoose from "mongoose";

const RegionStatSchema = new mongoose.Schema(
  {
    regionId: String,
    totalMembership: Number,
    yearlyMembership: Number,
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

const RegionStat = mongoose.model("RegionStat", RegionStatSchema);
export default RegionStat;