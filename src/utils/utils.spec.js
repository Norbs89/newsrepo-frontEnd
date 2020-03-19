import searchArticleByTitle from "./utils";

describe("searchArticleByTitle", () => {
  it("if an empty array and a value is provided, returns an empty object", () => {
    const input = [];
    const expected = [];
    const actual = searchArticleByTitle("something", input);
    expect(actual).toEqual(expected);
  });
  it("returns the specified value from the array", () => {
    const input = [
      {
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      },
      {
        title: "Seafood increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      }
    ];
    const expected = [
      {
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      }
    ];
    const actual = searchArticleByTitle("substitutions", input);
    expect(actual).toEqual(expected);
  });
  it("returns the specified value from the array", () => {
    const input = [
      {
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      },
      {
        title: "Seafood increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      }
    ];
    const expected = [
      {
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      }
    ];
    const actual = searchArticleByTitle("sub", input);
    expect(actual).toEqual(expected);
  });
});
