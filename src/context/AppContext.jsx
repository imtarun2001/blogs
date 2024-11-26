import { createContext, useState } from "react";
import { baseUrl } from "../Data";

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState(null);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    async function fetchBlogs(page=1) {
        setLoading(true);
        try {
            let response = await fetch(`${baseUrl}?page=${page}`);
            let output = await response.json();
            setPosts(output);
            setPage(output.page)
            setTotalPages(output.totalPages);
            console.log(response);
        }
        catch(error) {
            console.log("API can't fetched");
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogs(page);
    }

    const datas = { loading,setLoading,posts,setPosts,page,setPage,totalPages,setTotalPages,fetchBlogs,handlePageChange };

    return <AppContext.Provider value={datas}>
        {children}
    </AppContext.Provider>
}