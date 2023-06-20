import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // check whether the user exists or not
    let user = await User.findOne({ email });

    if (user) {
      // return res.status(400).json({ message: "User have already registered!" });
      throw new Error("User already registered!");
    }

    // create new user
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      isVerified: user.isVerified,
      isAdmin: user.isAdmin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid Email or Password");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
        isAdmin: user.isAdmin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid Email or Password.");
    }
  } catch (error) {
    next(error);
  }
};
