import isTeacher from "../rules/isTeacher";

const AuthMiddleware = {
  Query: {
    users: isTeacher,
  },
};

export { AuthMiddleware };