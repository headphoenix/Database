import mongoose from "mongoose";

const OverallShema = new mongoose.Schema(
  {
    Users: {
      _id: ObjectId,
      name: String,
      email: String,
      password: String,
      role: {
        type: String,
        enum: ['admin', 'region', 'constituency', 'bacenta', 'fellowship'],
      },
      region: {
        type: ObjectId,
        ref: 'Region',
      },
      constituency: {
        type: ObjectId,
        ref: 'Constituency',
      },
      bacenta: {
        type: ObjectId,
        ref: 'Bacenta',
      },
      fellowship: {
        type: ObjectId,
        ref: 'Fellowship',
      },
      phone: String,
      age: Number,
      birthday: Date,
      occupation: String,
      status: {
        type: String,
        enum: ['active', 'inactive'],
      },
    },
    Region: {
      _id: ObjectId,
      name: String,
      constituencies: [{
        type: ObjectId,
        ref: 'Constituency',
      }],
    },  
    Constituency: {
      _id: ObjectId,
      name: String,
      region: {
        type: ObjectId,
        ref: 'Region',
      },
      bacentas: [{
        type: ObjectId,
        ref: 'Bacenta',
      }],
    },
    Bacenta: {
      _id: ObjectId,
      name: String,
      constituency: {
        type: ObjectId,
        ref: 'Constituency',
      },
      fellowships: [{
        type: ObjectId,
        ref: 'Fellowship',
      }],
      members: [{
        type: ObjectId,
        ref: 'User',
      }],
    },
    Fellowship: {
      _id: ObjectId,
      name: String,
      bacenta: {
        type: ObjectId,
        ref: 'Bacenta',
      },
      members: [{
        type: ObjectId,
        ref: 'User',
      }],
    },
    Attendance: {
      _id: ObjectId,
      fellowship: {
        type: ObjectId,
        ref: 'Fellowship',
      },
      bacenta: {
        type: ObjectId,
        ref: 'Bacenta',
      },
      constituency: {
        type: ObjectId,
        ref: 'Constituency',
      },
      region: {
        type: ObjectId,
        ref: 'Region',
      },
      date: Date,
      type: {
        type: String,
        enum: ['saturday', 'sunday'],
      },
      members: [{
        type: ObjectId,
        ref: 'User',
      }],
    }
  }
)


const OverallTotalSchema = mongoose.model("OverallShema", OverallShema);
export default OverallTotalSchema;