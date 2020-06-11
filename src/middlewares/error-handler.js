export function errorHandler(error, request, response, next) {
  console.log('to aquiiiii', error, error.name);

  const code = error.name === 'ValidationError' ? 400 : error.statusCode || 500;

  response.status(code).json({
    message: error && error.message ? error.message : 'Internal server error',
  });
}
