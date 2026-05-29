const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  // Jo follow kar raha hai uska id
  const followerUsername = req.user.username;
  // Jisko follow kia jaa raha hai uska username
  const followeeUsername = req.params.username;

  // User cannot follow itself
  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself!",
    });
  }

  // Check if followee exists
  const isFolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isFolloweeExists) {
    return res.status(401).json({
      message: `You are trying to follow ${followeeUsername}, but ${followeeUsername} does not exists`,
    });
  }

  // Check if already followed
  const isAlreadyFollowed = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (isAlreadyFollowed) {
    return res.status(200).json({
      message: `You are already following ${followeeUsername}!`,
      follow: isAlreadyFollowed,
    });
  }

  // Create follow record
  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  // Return response
  res.status(201).json({
    message: `You (${followerUsername}) are now following ${followeeUsername}`,
    followRecord: followRecord,
  });
}

async function unFollowUserController(req, res) {
  // Jo follow kar raha hai uska id
  const followerUsername = req.user.username;
  // Jisko follow kia jaa raha hai uska username
  const followeeUsername = req.params.username;

  // Check if follower and followee same
  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "You cannot unfollow yourself",
    });
  }

  // Check if followee exists
  const isFolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isFolloweeExists) {
    return res.status(401).json({
      message: `You are trying to unfollow ${followeeUsername}, but ${followeeUsername} does not exists`,
    });
  }

  // Check if the user is following
  const isFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isFollowing) {
    return res.status(200).json({
      message: `You are not following ${followeeUsername}!`,
    });
  }

  // Unfollow
  const unFollow = await followModel.findByIdAndDelete(isFollowing._id);

  // Return the response
  res.status(201).json({
    message: `You (${followerUsername}) unfollowed ${followeeUsername}`,
    unfollow: unFollow,
  });
}

const updateFollowStatusController = async (req, res) => {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;
  const { status } = req.body;

  // Check if the user is following
  const isFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isFollowing) {
    return res.status(200).json({
      message: `No follow request!`,
    });
  }

  let updateFollow = null;

  if (status === "rejected") {
    updateFollow = await followModel.findByIdAndDelete(isFollowing._id);

    res.status(200).json({
      message: "Rejected the follow request",
      status: updateFollow,
    });
  }

  updateFollow = await followModel.findByIdAndUpdate(
    isFollowing._id,
    {
      status: status,
    },
    { new: true, runValidators: true },
  );

  res.status(200).json({
    message: "Accepted the follow request",
    status: updateFollow,
  });
};

module.exports = {
  followUserController,
  unFollowUserController,
  updateFollowStatusController,
};
