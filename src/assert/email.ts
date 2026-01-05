import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function email(value: unknown): asserts value is string {
  if (!isx.email(value)) {
    throw new ValidationError(
      "Invalid email address",
      "INVALID_EMAIL"
    );
  }
}