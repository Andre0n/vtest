export default class Test {
  private description: string;
  sucess: boolean = false;
  result: string = "";

  constructor(description: string) {
    this.description = description;
  }

  expect(test_function: () => any) {
  }
}
