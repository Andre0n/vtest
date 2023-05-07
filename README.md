
# Vtest - A very simple test library

Thinking about how a test library works I decided to create my own test library using TypeScript, taking inspiration from the functionality and design of existing libraries such as Jest. The code is available for anyone to clone and learn from.


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

Compiling the code

```bash
npm run build
```

## Usage/Examples



### Running the tests.

```sh
npm test
```
## Now let's dive into the `tests.js` file.

### Basic usage of this lib

- Create a basic test suite

```javascript
const vtest = require('./vtest');

const my_suite = new vtest.TestSuite("Test Suite Example");
```

- Use the function `add_test` to create a new test

```javascript
my_suite.add_test("1 + 1 should be 2");
```

- This function returns the `expect()` function that returns matchers like `toBe()` that compares whether two elements are equals.

```javascript
my_suite
  .add_test(" 1 + 1 should be 2")
  .expect(() => {
    return 1 + 1;
  })
  .toBe(2);

my_suite
  .add_test(" 'aabb' == 'aabb' ")
  .expect(() => {
    return "aabb";
  })
  .toBe("aabb");
```

- The `toBe` has a variant the `notBe`

```javascript
my_suite
  .add_test("2 - 1 should not be 3")
  .expect(() => {
    return 2 - 1;
  })
  .notBe(3);
```

### Other important matchers

- The `toBeDefined`

```javascript
my_suite
  .add_test("check if was defined")
  .expect(() => {
    return {};
  })
  .toBeDefined();
```

- The `toBeCloseTo`

```javascript
my_suite
  .add_test("check if 0.1 + 0.2 is close to 0.3")
  .expect(() => {
    return 0.1 + 0.2;
  })
  .toBeCloseTo(0.3);
```

- The `toBeNull`

```javascript
my_suite
  .add_test("check if is null")
  .expect(() => {
    return null;
  })
  .toBeNull();
```

- The `notBeNull`

```javascript
my_suite
  .add_test("check if is not null")
  .expect(() => {
    return null;
  })
  .notBeNull();
```

### Checking the results

To print test results the `TestSuite` object has the `report()` method.

```javascript
my_suite.report();
```

### Output

Our example will produce the following result

```bash
Test Suite Example
  ✔  1 + 1 should be 2
  ✔  'aabb' == 'aabb'
  ✔ 2 - 1 should not be 3
  ✔ check if was defined
  ✔ check if 0.1 + 0.2 is close to 0.3
  ✔ check if is null
  ✖ check if is not null  notBeNull: The object is null
         >> Expected: any  Got: null <<

Tests:  Passed: 6, Failed: 1, Total: 7
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@Andre0n](https://www.github.com/Andre0n)

