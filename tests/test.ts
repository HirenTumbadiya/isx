import { isx, assert } from "../dist/index.js";

try {
  assert.email("bad@@mail");
} catch (e) {
  console.error(e instanceof Error ? e.message : e);
}

assert.email("test@gmail.com");