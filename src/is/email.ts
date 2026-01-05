import { EMAIL_REGEX } from "../regex/email";

export function email(value: unknown): value is string {
  if (typeof value !== "string") return false;
  if (value.length > 254) return false; // RFC-safe max length
  return EMAIL_REGEX.test(value);
}


