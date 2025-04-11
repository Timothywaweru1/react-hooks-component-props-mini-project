
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import logo from "../assets/logo"; // Ensure this exists or replace with a URL

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About image={logo} about="A blog about React and frontend development." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

