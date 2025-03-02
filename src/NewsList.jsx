import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
  return (
    <main id="blog-container">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </main>
  );
};

export default NewsList;
