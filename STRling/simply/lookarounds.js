import { STRlingError, Pattern, lit } from "./pattern.js";

/**
A positive lookahead checks for the presence of the specified pattern after the current position without including it in the result.
@param {Pattern|string} pattern - The pattern to look ahead for.
@returns {Pattern} An instance of the Pattern class.
@example
// Only matches a digit followed by a letter.
const myPattern = s.merge(s.digit(), s.ahead(s.letter()));
*/
export function ahead(pattern) {
  if (typeof pattern === "string") {
    pattern = lit(pattern);
  }

  if (!(pattern instanceof Pattern)) {
    const message = `
    Method: simply.ahead(pattern)

    The parameter must be an instance of Pattern or string.

    Use a string such as "123abc$" to match literal characters, or use a predefined set like simply.letter().
    `;
    throw new STRlingError(message);
  }

  return new Pattern({ pattern: `(?=${pattern})`, composite: true });
}

/**
A negative lookahead checks for the absence of the specified pattern after the current position without including it in the result.
@param {Pattern|string} pattern - The pattern to look ahead for and ensure is absent.
@returns {Pattern} An instance of the Pattern class.
@example
// Only matches a digit if not followed by a letter.
const myPattern = s.merge(s.digit(), s.notAhead(s.letter()));
*/
export function notAhead(pattern) {
  if (typeof pattern === "string") {
    pattern = lit(pattern);
  }

  if (!(pattern instanceof Pattern)) {
    const message = `
    Method: simply.notAhead(pattern)

    The parameter must be an instance of Pattern or string.

    Use a string such as "123abc$" to match literal characters, or use a predefined set like simply.letter().
    `;
    throw new STRlingError(message);
  }

  return new Pattern({ pattern: `(?!${pattern})`, composite: true });
}

/**
A positive lookbehind checks for the presence of the specified pattern before the current position without including it in the result.
@param {Pattern|string} pattern - The pattern to look behind for.
@returns {Pattern} An instance of the Pattern class.
@example
// Only matches a letter preceded by a digit.
const myPattern = s.merge(s.behind(s.digit()), s.letter());
*/
export function behind(pattern) {
  if (typeof pattern === "string") {
    pattern = lit(pattern);
  }

  if (!(pattern instanceof Pattern)) {
    const message = `
    Method: simply.behind(pattern)

    The parameter must be an instance of Pattern or string.

    Use a string such as "123abc$" to match literal characters, or use a predefined set like simply.letter().
    `;
    throw new STRlingError(message);
  }

  return new Pattern({ pattern: `(?<=${pattern})`, composite: true });
}

/**
A negative lookbehind checks for the absence of the specified pattern before the current position without including it in the result.
@param {Pattern|string} pattern - The pattern to look behind for and ensure is absent.
@returns {Pattern} An instance of the Pattern class.
@example
// Only matches a letter if not preceded by a digit.
const myPattern = s.merge(s.behind(s.digit()), s.letter());
*/
export function notBehind(pattern) {
  if (typeof pattern === "string") {
    pattern = lit(pattern);
  }

  if (!(pattern instanceof Pattern)) {
    const message = `
    Method: simply.notBehind(pattern)

    The parameter must be an instance of Pattern or string.

    Use a string such as "123abc$" to match literal characters, or use a predefined set like simply.letter().
    `;
    throw new STRlingError(message);
  }

  return new Pattern({ pattern: `(?<!${pattern})`, composite: true });
}

/**
A lookaround that checks for the presence of the specified pattern anywhere in the string without including it in the result.
@param {Pattern|string} pattern - The pattern to look for.
@returns {Pattern} An instance of the Pattern class.
@example
// Only matches if the string contains the pattern.
const myPattern = s.has(pattern);
*/
export function has(pattern) {
  if (typeof pattern === "string") {
    pattern = lit(pattern);
  }

  if (!(pattern instanceof Pattern)) {
    const message = `
    Method: simply.has(pattern)

    The parameter must be an instance of Pattern or string.

    Use a string such as "123abc$" to match literal characters, or use a predefined set like simply.letter().
    `;
    throw new STRlingError(message);
  }

  return new Pattern({ pattern: `(?=.*${pattern})`, composite: true });
}

/**
A lookaround that checks for the absence of the specified pattern everywhere in the string without including it in the result.
@param {Pattern|string} pattern - The pattern to look for and ensure is absent.
@returns {Pattern} An instance of the Pattern class.
@example
// Only matches if the string doesn't contain the pattern.
const myPattern = s.hasNot(pattern);
*/
export function hasNot(pattern) {
  if (typeof pattern === "string") {
    pattern = lit(pattern);
  }

  if (!(pattern instanceof Pattern)) {
    const message = `
    Method: simply.hasNot(pattern)

    The parameter must be an instance of Pattern or string.

    Use a string such as "123abc$" to match literal characters, or use a predefined set like simply.letter().
    `;
    throw new STRlingError(message);
  }

  return new Pattern({ pattern: `(?!.*${pattern})`, composite: true });
}
