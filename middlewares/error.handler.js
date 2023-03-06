function logErrors(err, req, res, next) {
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(404).json({
    message: err.message,
  });
}

module.exports = { logErrors, errorHandler };
