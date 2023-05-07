import { Test } from './Test';

/**
 * The Test Suite class
 */
export default class TestSuite {
  /**
   * the name of test suite.
   * @property {string}
   */
  private name: string;

  /**
   * the array of tests
   * @property {boolean}
   */
  private tests: ITest[];

  /**
   * the counter of suscces tests
   * @property {boolean}
   */
  private result_succes: number = 0;

  /**
   * Creates a new instance of the TestSuite class
   * @param name the test suite name
   */
  constructor(name: string) {
    this.name = name;
    this.tests = [];
  }

  /**
   * Add a new test to the test suite
   * @param description the test description
   */
  add_test(description: string): ITest {
    const t = new Test(description);
    this.tests.push(t);
    return t;
  }

  /**
   * Prints out all test messages
   */
  report() {
    let output = `${this.name}\n`;

    for (let test of this.tests) {
      output += `  ${test.result}\n`;
      this.result_succes += test.sucess ? 1 : 0;
    }

    const failed = this.tests.length - this.result_succes;
    if (failed == 0) {
      output += `\nTests: \tPassed: ${this.result_succes}, Total: ${this.tests.length}`;
    } else {
      output += `\nTests: \tPassed: ${this.result_succes}, \Failed: ${failed}, Total: ${this.tests.length}`;
    }
    console.log(output);
  }
}
