import React, { useContext } from 'react'
import './Pagination.css'
import { AppContext } from '../context/AppContext'

export default function Pagination() {

    let {page,totalPages,handlePageChange} = useContext(AppContext);


  return (
    <div className='pagination'>
        <div className='btnHolder'>
            <div>
                {
                    page>1 && <button onClick={() => handlePageChange(page-1)}>Previous</button>
                }
            </div>
            <div>
                {
                    page<totalPages && <button onClick={() => handlePageChange(page+1)}>Next</button>
                }
            </div>
        </div>

        <div>
            {
                `Page ${page} of ${totalPages}`
            }
        </div>
    </div>
  )
}
