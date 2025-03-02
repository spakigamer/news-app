import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import NewsList from "./NewsList";
import "./styles.css";

const API_KEY = process.env.REACT_APP_API_KEY;


const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (search = "olympics") => {
    try {
      const url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=${API_KEY}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Navbar onSearch={fetchNews} />
      <NewsList articles={articles} />
    </>
  );
};

export default App;
