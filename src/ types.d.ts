/**
 * The type definition of matcher options object.
 */
type MatcherOptions = {
  matcher_name: string;
  comment: string | null;
  expected: any | null | undefined;
  current: any | null | undefined;
};

/**
 * The Interface of TestSuite class
 */
interface ITest {
  description: string;
  sucess: boolean = false;
  result: string = '';
}

interface Matchers<T> {
  /**
   * Checks that the tested value is exactly equal to an expected value.
   * @param expected expected value.
   */
  toBe(expected: T): void;
  /**
   * Checks that the tested value is not exactly equal to an expected value.
   * @param expected expected value.
   */
  notBe(expected: T): void;
  /**
   * Checks that the tested value is defined.
   */
  toBeDefined(): void;
  /**
   * Checks that the tested value is null.
   */
  toBeNull(): void;
  /**
   * Checks that the tested value is not null.
   */
  notBeNull(): void;
  /**
   * Checks that the tested value close to expected value using a precision.
   * @param expected expected value.
   * @param precision the presicion to check.
   */
  toBeCloseTo(expected: number, precision: number = 2): void;
}
