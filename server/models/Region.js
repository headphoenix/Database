import mongoose from "mongoose";

const RegionSchema = new mongoose.Schema(
  {
    name: String,
    leader: String,
    totalMembers: Number,
    description: String,
  },
  { timestamps: true }
);

const Region = mongoose.model("Region", RegionSchema);
export default Region;