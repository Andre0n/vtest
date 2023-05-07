import { new_output_message } from './utils';

/**
 * Returns the matchers
 * @param current_test the current test
 * @param current Obtained current value of the test function
 * @returns
 */
const get_matchers = (current_test: ITest, current: any): Matchers<any> => {
  return {
    toBe: (expected: any) => {
      type NewType = MatcherOptions;

      const options: NewType = {
        matcher_name: 'toBe',
        comment: 'Object.is equality',
        expected: expected,
        current: current,
      };
      const pass = Object.is(current, expected);
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description,
      );
      current_test.sucess = pass;
    },
    notBe: (expected: any) => {
      const options: MatcherOptions = {
        matcher_name: 'notBe',
        comment: '!(Object.is) not equality',
        expected: expected,
        current: current,
      };
      const pass = !Object.is(current, expected);
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description,
      );
      current_test.sucess = pass;
    },
    toBeDefined() {
      const pass = current !== void 0;
      const options: MatcherOptions = {
        matcher_name: 'toBeDefined',
        comment: 'The object has not been defined',
        expected: 'any',
        current: current,
      };
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description,
      );
      current_test.sucess = pass;
    },
    toBeNull() {
      const pass = current === null;
      const options: MatcherOptions = {
        matcher_name: 'toBeNull',
        comment: 'The object is not null',
        expected: 'null',
        current: current,
      };
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description,
      );
      current_test.sucess = pass;
    },
    notBeNull() {
      const pass = !(current === null);
      const options: MatcherOptions = {
        matcher_name: 'notBeNull',
        comment: 'The object is null',
        expected: 'any',
        current: current,
      };
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description,
      );
      current_test.sucess = pass;
    },

    toBeCloseTo(expected: number, precision: number = 2) {
      if (typeof expected !== 'number') {
        throw new Error(`expected must be  number`);
      }
      if (typeof current !== 'number') {
        throw new Error(`current must be  number`);
      }

      const options: MatcherOptions = {
        matcher_name: 'toBeCloseTo',
        comment: '',
        expected: 'any',
        current: current,
      };

      let pass = false;
      let expectedDiff = 0;
      let currentDiff = 0;

      if (current === Infinity && expected === Infinity) {
        pass = true;
      } else if (current === -Infinity && expected === -Infinity) {
        pass = true;
      } else {
        expectedDiff = Math.pow(10, -precision) / 2;
        currentDiff = Math.abs(expected - current);
        pass = currentDiff < expectedDiff;
      }
      current_test.result = new_output_message(
        options,
        pass,
        current_test.description,
      );
      current_test.sucess = pass;
    },
  };
};

export default get_matchers;
