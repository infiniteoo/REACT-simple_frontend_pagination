import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  return (
    <div className="container">
      <h1>My App</h1>
    </div>
  );
}

export default App;
