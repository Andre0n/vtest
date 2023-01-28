# Vtest

Thinking about how a test library works I decided to create my own test library using TypeScript, taking inspiration from
the functionality and design of existing libraries such as Jest. The code is available for anyone to clone and learn from.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Andre0n/vtest
```

Go to the project directory

```bash
  cd vtest
```

Install dependencies

```bash
  npm install
```

Start

```bash
  npm run  dev
```

## Usage/Examples

### Code

```javascript
import { TestSuite } from "./lib";

const my_suite = new TestSuite("Test Example");

my_suite
  .add_test("1 + 1 should be 2")
  .expect(() => {
    return 1 + 1;
  })
  .toBe(3);

my_suite
  .add_test(" 'aabb' == 'aabb' ")
  .expect(() => {
    return "aabb";
  })
  .toBe("aabb");

my_suite
  .add_test("2 - 1 should not be 3")
  .expect(() => {
    return 2 - 1;
  })
  .notBe(3);

my_suite.report();
```

### Output

```bash
Test Example
  ✖  1 + 1 should be 2  toBe: Object.is equality
	 >> Expected: 3  Got: 2 <<
  ✔  'aabb' == 'aabb'
  ✔ 2 - 1 should not be 3

Tests:  Passed: 2, Failed: 1, Total: 3
```

## Authors

- [@Andre0n](https://github.com/Andre0n)

## License

[MIT](https://choosealicense.com/licenses/mit/)
