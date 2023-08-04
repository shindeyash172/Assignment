const BaseError = require("./BaseError");

class UnauthorizedError extends BaseError {
  constructor(specificMessage) {
    super("Unauthorized Access", "Unauthorized", 401, specificMessage);
  }
}

module.exports = UnauthorizedError;
