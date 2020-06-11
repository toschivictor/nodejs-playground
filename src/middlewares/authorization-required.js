export const authorizationRequired = () =>
  async function (request, response, next) {
    const token = request.headers['access-token'];

    if (!token) {
      const error = new Error();
      error.name = 'UnauthorizedError';
      error.message = 'Unauthorized request, check you credentials';
      error.statusCode = 401;

      return next(error);
    }

    next();
  };
