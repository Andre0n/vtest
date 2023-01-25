import Test from "./_test";

export class TestSuite {
  private name: string;
  private tests: Test[];
  private result_succes: number = 0;

  constructor(name: string) {
    this.name = name;
    this.tests = [];
  }

  add_test(description: string): Test {
    const t = new Test(description);
    this.tests.push(t);
    return t;
  }

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
