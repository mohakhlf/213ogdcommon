import isTeacher from '../rules/isTeacher';

const FileMiddleware = {
  Mutation: {
    createOrUpdate: isTeacher,
  },
};

export { FileMiddleware };