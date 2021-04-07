import mongoose from "mongoose";
import UserProfile from "../models/userProfile";

export function createUserProfile(req, res) {
  const profile = new UserProfile({
    _id: mongoose.Types.ObjectId(),
    avatar_url: req.body.avatar_url,
    basicInfo: req.body.basicInfo,
    certificate: req.body.certificate,
    wishes: req.body.wishes,
  });

  return profile
    .save()
    .then((newRecord) => {
      return res.status(201).json({
        success: true,
        message: "New cause created successfully",
        data: newRecord,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
}

export function getUserProfile(req, res) {
  UserProfile.find({}, function (err, users) {
    var userMap = {};

    users.forEach(function (user) {
      userMap[user._id] = user;
    });

    res.send(userMap);
  });
}

export function getOneUserProfile(req, res) {
  const id = req.params.userId;
  console.log('1')
  UserProfile.findById(id)
    .then((data) => {
      res.status(200).json({
        success: true,
        message: `Success`,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "User not found",
        error: err.message,
      });
    });
}

export function updateUserProfile(req, res) {
  const id = req.params.userId;
  const updateObj = req.body;

  UserProfile.update({ _id: id }, { $set: updateObj })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Updated success",
        data: updateObj,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
      });
    });
}
