import Title from './components/Title'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  const { fetchBlogs } = useContext(AppContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 p-4">
      <div className="w-full max-w-screen-lg">
        <Title />
        <div className="my-6">
          <Blogs />
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default App