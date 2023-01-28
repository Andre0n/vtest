import { matcher_options } from "./types";
import { new_output_message } from "./utils";
const get_matchers = (current_test: Test, current: any) => {
  return {
    toBe: (expected: any) => {
      const options: matcher_options = {
        matcher_name: "toBe",
        comment: "Object.is equality",
        expected: expected,
        current: current,
      };
      const pass = Object.is(current, expected);
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description
      );
      current_test.sucess = pass;
    },
    notBe: (expected: any) => {
      const options: matcher_options = {
        matcher_name: "notBe",
        comment: "!(Object.is) not equality",
        expected: expected,
        current: current,
      };
      const pass = !Object.is(current, expected);
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description
      );
      current_test.sucess = pass;
    },
  };
};

export default get_matchers;
