import { gerStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  test("Should return uppercase of valid string", () => {
    // Arrange --
    const sut = toUpperCase;
    const expected = "HELLO";

    // Act --
    const actual = sut("hello");

    // Assert --
    expect(actual).toBe(expected);
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
