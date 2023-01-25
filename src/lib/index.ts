
export class TestSuite {
  private name: string;
  private tests: Test[];
  private result_succes: number = 0;

  constructor(name: string) {
    this.name = name;
    this.tests = [];
  }
