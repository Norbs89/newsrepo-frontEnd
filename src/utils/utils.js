const searchArticleByTitle = (title, articles) => {
  if (articles.length !== 0) {
    let filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(title)
    );

    return filteredArticles;
  }
  return [];
};

export { searchArticleByTitle };
