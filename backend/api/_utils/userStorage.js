// In-memory user storage (replace with database in production)
// Note: This will reset on each function cold start in serverless
const users = new Map();

export const getUser = (userId) => users.get(userId);

export const setUser = (userId, userData) => {
  users.set(userId, userData);
  return userData;
};

export const updateUser = (userId, updates) => {
  const user = users.get(userId);
  if (!user) return null;
  
  const updatedUser = { ...user, ...updates };
  users.set(userId, updatedUser);
  return updatedUser;
};

export const createUser = (googleId, { email, name, picture }) => {
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