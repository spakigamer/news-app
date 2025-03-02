const NewsCard = ({ article }) => {
    return (
      <div className="blog-card" onClick={() => window.open(article.url, "_blank")}>
        <img src={article.image || "https://placehold.co/600x400"} alt={article.title} />
        <h2>{article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title}</h2>
        <p>{article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description}</p>
      </div>
    );
  };
  
  export default NewsCard;
  