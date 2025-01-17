/**
 * Graphology Custom Errors
 * =========================
 *
 * Defining custom errors for ease of use & easy unit tests across
 * implementations (normalized typology rather than relying on error
 * messages to check whether the correct error was found).
 */
export class GraphError extends Error {
  constructor(message, data) {
    super();
    this.name = 'GraphError';
    this.message = message || '';
    this.data = data || {};
  }
}

export class InvalidArgumentsGraphError extends GraphError {
  constructor(message, data) {
    super(message, data);
    this.name = 'InvalidArgumentsGraphError';

    // This is V8 specific to enhance stack readability
    if (typeof Error.captureStackTrace === 'function')
      Error.captureStackTrace(
        this,
        InvalidArgumentsGraphError.prototype.constructor
      );
  }
}

export class NotFoundGraphError extends GraphError {
  constructor(message, data) {
    super(message, data);
    this.name = 'NotFoundGraphError';

    // This is V8 specific to enhance stack readability
    if (typeof Error.captureStackTrace === 'function')
      Error.captureStackTrace(this, NotFoundGraphError.prototype.constructor);
  }
}

export class UsageGraphError extends GraphError {
  constructor(message, data) {
    super(message, data);
    this.name = 'UsageGraphError';

    // This is V8 specific to enhance stack readability
    if (typeof Error.captureStackTrace === 'function')
      Error.captureStackTrace(this, UsageGraphError.prototype.constructor);
  }
}
