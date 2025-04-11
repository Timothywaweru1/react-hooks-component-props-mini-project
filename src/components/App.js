import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <About about = {blogData.about} img ={blogData.image}/>
      <Header name = {blogData.name}/>
      <ArticleList pst = {blogData.posts}/>
    </div>
  );
}

export default App;
