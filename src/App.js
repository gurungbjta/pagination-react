import React, {useState, useEffect} from 'react';
import './App.css';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

function App() {
  const[posts, setPosts] = useState([]) // intially the posts array is empty
  const[loading, setLoading] = useState(false) // intially the posts loading is false
  const[currPage, setCurrPage] = useState(1); // intially the current Page we're at is 1
  const[postsPerPage] = useState(10) // intially we want to display 10 posts per page

  useEffect(() => { // we fetch data inside of useEffect
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts') // there are 100 total posts
    .then(res => res.json())
    .then(setPosts) // posts = [100 different post]
    .then(setLoading(false)) // set loading back to false
    .catch(console.error)
    
  }, [])

  // get current posts
  const indexOfLastPost = currPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currPosts = posts.slice(indexOfFirstPost, indexOfLastPost) // indexOfLastPost is exclusive. Will get posts=[10 diff. post] since postsPerPage = 10

  // change page num 
  const changePageNum = (num) => {
    setCurrPage(num);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Pagination Posts</h1>
      <h2>Checking</h2>
      <h2>Test 4</h2>
      <Posts posts={currPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} changePageNum={changePageNum} />
    </div>
  )
}

export default App;
