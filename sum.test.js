const { sum, myFunction, fetchData, fetchPromise } = require("./sum");

// toBe => primitive values
test("adds 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("1 is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

// error handling
test("throws on invalid input", () => {
  expect(() => {
    myFunction("3");
  }).toThrow();
});

// async functions
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// test promise
test("promise data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

// test("promise fails", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

test("async function", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});

test("mock implementation", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(2)).toBe(44);
  expect(mock).toHaveBeenCalledWith(2);
});

test("slying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();
  video.play();

  expect(spy).toHaveBeenCalledTimes(2);
  spy.mockRestore();
});
