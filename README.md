## loopback-common-errors

Little module for using the object Error as loopback uses them for returning error responses.

Example usage:

```sh 
var errors = require('loopback-common-errors');
...
if(user == null){
    cb(errors.notFound('User Not Found'));
    return;
}
...
if(err){
    cb(errors.serverError());
    return;
}
```

You have 5 prototyped common functions:

* **badRequest(msg)**: returns status 400 and default message 'Bad Request'
* **fobidden(msg)**: returns status 403 and default message 'Forbidden'
* **notFound(msg)**: returns status 404 and default message 'Not Found'
* **serverError(msg)**: returns status 500 and default message 'Internal Server Error'
* **otherError(name, msg, status)**: returns an Error with fields passed as args