import get_matchers from './matchers';

/**
 * The test class.
 */
export class Test implements ITest {
  /**
   * the description of test.
   * @property {string}
   */
  description: string;

  /**
   * the success state of test
   * @property {boolean}
   */
  sucess: boolean = false;
  /**
   * the result message of the test.
   * @property {string}
   */
  result: string = '';

  /**
   * Creates a new instance of the Test class.
   * @param description the description of test.
   */
  constructor(description: string) {
    this.description = description;
  }

  /**
   * A function for creating assertions and expectations regarding the behavior of a particular function or piece of code.
   * @param test_function the value you expect to be returned by a given operation or function.
   * @returns  An object with chainable methods for making assertions about the tested value.
   * @example
   * test('Sum test', () => {
   *   const result = sum(2, 3);
   *   expect(result).toBe(5);
   * });
   */
  expect(test_function: () => Matchers<any>) {
    const current = test_function();
    return get_matchers(this, current);
  }
}
