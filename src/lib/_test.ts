import get_matchers from "./matchers";

export default class Test {
  private description: string;
  sucess: boolean = false;
  result: string = "";

  constructor(description: string) {
    this.description = description;
  }

  expect(test_function: () => any) {
    const current = test_function();
    return get_matchers(this, current);
  }
}
