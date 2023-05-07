const vtest = require('./vtest');

const main = () => {
  const my_suite = new vtest.TestSuite('Test Suite Example');
  my_suite
    .add_test(' 1 + 1 should be 2')
    .expect(() => {
      return 1 + 1;
    })
    .toBe(2);

  my_suite
    .add_test(" 'aabb' == 'aabb' ")
    .expect(() => {
      return 'aabb';
    })
    .toBe('aabb');

  my_suite
    .add_test('2 - 1 should not be 3')
    .expect(() => {
      return 2 - 1;
    })
    .notBe(3);

  my_suite
    .add_test('check if was defined')
    .expect(() => {
      return {};
    })
    .toBeDefined();

  my_suite
    .add_test('check if 0.1 + 0.2 is close to 0.3')
    .expect(() => {
      return 0.1 + 0.2;
    })
    .toBeCloseTo(0.3);

  my_suite
    .add_test('check if is null')
    .expect(() => {
      return null;
    })
    .toBeNull();
  my_suite
    .add_test('check if is not null')
    .expect(() => {
      return null;
    })
    .notBeNull();

  my_suite.report();
};
main();
