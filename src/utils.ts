// TODO: Implement colors on output

/**
 * Creates a new output message
 * @param options the options of current matcher
 * @param pass the result of the matcher test
 * @param test_description the current test description
 * @returns a message with information about the tests performed
 */
export const new_output_message = (
  options: MatcherOptions,
  pass: boolean,
  test_description: string,
): string => {
  let message = '';
  if (pass) {
    message += `✔ ${test_description}`;
  } else {
    let comment = `${options.matcher_name}: ${options.comment}\n`;
    message += `✖ ${test_description}  ${comment}`;
    message += `\t >> Expected: ${options.expected}  Got: ${options.current} <<`;
  }
  return message;
};
