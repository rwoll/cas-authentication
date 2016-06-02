'use strict';

function CASAuthenticationError(message) {
  this.name = 'CASAuthenticationError';
  this.message = message || 'Authentication failure';
  this.stack = (new Error()).stack;
}
CASAuthenticationError.prototype = Object.create(Error.prototype);
CASAuthenticationError.prototype.constructor = CASAuthenticationError;

module.exports = {
  CASAuthenticationError: CASAuthenticationError
};
