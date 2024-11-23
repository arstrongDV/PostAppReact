import React, { useState } from "react";
import style from './style/style.module.css'

let Paginator = ({totalUsersCount, pageSize, portionSize=10, onPageChange, currentPage}) => {
    let totalPages = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(totalPages/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1) * portionSize+1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div>
            {portionNumber > 1 && 
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Go Left</button>
            }
            {pages.
            filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => (
                <span onClick={(e) => {onPageChange(p)}} className={currentPage === p && style.selected}>{p}</span>
            ))}
            {portionCount > portionNumber && 
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Go Right</button>
            }
        </div>
        )
}

export default Paginator;
