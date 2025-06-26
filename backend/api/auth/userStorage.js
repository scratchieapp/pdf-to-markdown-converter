// Shared in-memory user storage
// In production, replace this with a proper database
const users = new Map();

const getUser = (userId) => users.get(userId);

const createUser = (googleId, { email, name, picture }) => {
  const user = {
    id: googleId,
    email,
    name,
    picture,
    freeTrialUsed: false,
    conversions: [],
    createdAt: new Date(),
  };
  users.set(googleId, user);
  return user;
};

const updateUser = (userId, updates) => {
  const user = getUser(userId);
  if (user) {
    Object.assign(user, updates);
    users.set(userId, user);
  }
  return user;
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  users
};