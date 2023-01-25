import { matcher_options } from "./types";

export default class Test {
  private description: string;
  sucess: boolean = false;
  result: string = "";

  constructor(description: string) {
    this.description = description;
  }

  expect(test_function: () => any) {
    const current = test_function();
    return {
      toBe: (expected: any) => {
        const options: matcher_options = {
          matcher_name: "toBe",
          comment: "Object.is equality",
          expected: expected,
          current: current,
        };
        const pass = Object.is(current, expected);
        this.sucess = pass;
      },
    };
  }
}
