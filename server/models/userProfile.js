import mongoose from "mongoose";
const { Model, Schema } = mongoose;

mongoose.Promise = global.Promise;

// class basicInfo {
//   constructor(name, dob) {
//     this.name = name;
//     this.dob = dob;
//   }
// }
const userProfileSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  avatar_url: {
    type: String,
    require: false,
  },
  basicInfo: {
    type: Object,
    require: false,
  },
  certificate: {
    type: Object,
    require: false,
  },
  wishes: {
    type: Object,
    require: false,
  },
});

export default mongoose.model("UserProfile", userProfileSchema);
