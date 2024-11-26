import Title from './components/Title'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import './App.css'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

function App() {

  const {fetchBlogs} = useContext(AppContext);

  useEffect(() => {
    fetchBlogs();
  },[]);

  return (
    <div className='app'>
      <div>
        <Title/>
      </div>
      <div>
        <Blogs/>
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default App
