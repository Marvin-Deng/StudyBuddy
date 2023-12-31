import { pool } from "./db.js";
import GithubStrategy from "passport-github2";

const options = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
};

const verify = async (accessToken, refreshToken, profile, callback) => {
  const {
    __json: { id, name, login, avatar_url },
  } = profile;
  const userData = {
    githubId: id,
    username: login,
    avatarUrl: avatar_url,
    accessToken,
  };

  try {
    const results = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [userData.username]
    );
    const user = results.row(0);

    if (!user) {
      const results = await pool.query(
        `INSERT INTO users (githubid, username, avatarurl, accesstoken)
                VALUES($1, $2, $3, $4)
                RETURNING *
                `[
          (userData.githubId,
          userData.username,
          userData.avatarUrl,
          accessToken)
        ]
      );
      const newUser = results.row[0];
      return callback(null, newUser);
    }
    return callback(null, newUser);
  } catch (error) {
    return callback(error);
  }
};

export const Github = new GithubStrategy(options, verify);
