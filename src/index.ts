import { TestSuite } from "./lib";
const main = () => {
  const my_suite = new TestSuite("Test numbers");
  my_suite
    .add_test(" 1 + 1 should be 2")
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

  my_suite.report();
};
main();
