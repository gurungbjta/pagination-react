import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, changePageNum}) => {
    const pageNums = []; // page num array

    // if there are 100 totalPosts and 10 postsPerPage then pageNums will be [1,2,3,...,9,10]
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNums.push(i);
    }
    return ( // onclick, call changePageNum func (see App.js) that changes the current Page we're at
        <nav>
            <ul className="pagination">
                {pageNums.map(num => (
                    <li key={num} className="page-item">
                        <a onClick={() => changePageNum(num)} href="!#" className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
