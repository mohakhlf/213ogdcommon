import { AuthenticationError } from 'apollo-server';

const isTeacher = (
  resolve: any,
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (context.user === undefined) {
    throw new AuthenticationError('UNAUTHENTICATED');
  } else if (context && context.user) {
    const user = JSON.parse(context.user);
    if (user.role !== 'teacher') {
      throw new AuthenticationError('UNAUTHENTICATED');
    } else {
      return resolve(parent, args, context, info);
    }
  }
};

export default isTeacher;