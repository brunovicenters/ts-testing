import { gerStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("Random");

      expect(actual).toBe("RANDOM");
    });

    it("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase();
      }

      expect(expectError).toThrow();
      // you can specify the error message
      // expect(expectError).toThrow("arg is required");
    });

    it("Should throw error on invalid argument - try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo should have thrown an error for invalid arg!");
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toHaveProperty("message", "arg is required");
        done();
      }
    });
  });

  describe("toUpperCase examples", () => {
    it.each([
      { input: "Random", expected: "RANDOM" },
      { input: "aBC", expected: "ABC" },
      { input: "DeF", expected: "DEF" },
    ])("should return $expected for $input", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("gerStringInfo for arg Random should", () => {
    it("return right length", () => {
      const actual = gerStringInfo("Random");
      expect(actual.characters).toHaveLength(6);
    });

    it("return right lower case", () => {
      const actual = gerStringInfo("Random");
      expect(actual.lowerCase).toBe("random");
    });

    it("return right upper case", () => {
      const actual = gerStringInfo("Random");
      expect(actual.upperCase).toBe("RANDOM");
    });

    it("return right characters", () => {
      const actual = gerStringInfo("Random");
      expect(actual.characters).toContain<string>("R");
      expect(actual.characters).toEqual(["R", "a", "n", "d", "o", "m"]);
      expect(actual.characters).toEqual(
        expect.arrayContaining(["R", "a", "n", "d", "o", "m"])
      );
    });

    it("return if extra info is defined", () => {
      const actual = gerStringInfo("Random");
      // expect(actual.extraInfo).not.toBe(undefined);
      // expect(actual.extraInfo).not.toBeUndefined();
      // expect(actual.extraInfo).toBeTruthy();
      expect(actual.extraInfo).toBeDefined();
    });
  });
});
