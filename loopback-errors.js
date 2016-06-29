function ErrorResponse() {}

ErrorResponse.prototype.badRequest = function(msg){
  var error = new Error('Bad Request');

  error.statusCode = 400;
  if(msg !== undefined && msg !== null && msg != ''){
    error.message = msg;
  }

  return error;
};

ErrorResponse.prototype.forbidden = function(msg){
  var error = new Error('Forbidden');

  error.statusCode = 403;
  if(msg !== undefined && msg !== null && msg != ''){
    error.message = msg;
  }

  return error;
};

ErrorResponse.prototype.notFound = function(msg){
  var error = new Error('Not Found');

  error.statusCode = 404;
  if(msg !== undefined && msg !== null && msg != ''){
    error.message = msg;
  }

  return error;
};

ErrorResponse.prototype.serverError = function(msg){
  var error = new Error('Internal Server Error');

  error.statusCode = 500;
  if(msg !== undefined && msg !== null && msg != ''){
    error.message = msg;
  }

  return error;
};

ErrorResponse.prototype.otherError = function(name, msg, status){
  var error = new Error(msg);
  error.statusCode = status;
  error.name = name;

  return error;
};

// Default instance
var ErrorResponse = new ErrorResponse();

module.exports = ErrorResponse;