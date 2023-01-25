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
