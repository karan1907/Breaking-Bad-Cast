import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/ui/Header";
import Search from "./component/ui/Search";
import Container from "./component/Container";
import Axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fethcItems = async () => {
    const res = await Axios.get(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    setItems(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fethcItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <Container items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
