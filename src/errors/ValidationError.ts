export class ValidationError extends Error {
  readonly code: string;

  constructor(message: string, code = "INVALID_VALUE") {
    super(message);
    this.name = "ValidationError";
    this.code = code;
  }
}