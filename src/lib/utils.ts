import { matcher_options } from "./types";

// TODO: Implement colors on output
export const new_output_message = (
  options: matcher_options,
  pass: boolean,
  test_description: string
): string => {
  let message = "";
  if (pass) {
    message += `✔ ${test_description}`;
  } else {
    let comment = `${options.matcher_name}: ${options.comment}\n`;
    message += `✖ ${test_description}  ${comment}`;
    message += `\t >> Expected: ${options.expected}  Got: ${options.current} <<`;
  }
  return message;
};
