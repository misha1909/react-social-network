// import pageNumber_classes from './paginator.module.css'

// let Pages = ({ totalUsersCount, pageSize, onPageChanged, currentPage }) => {
//     let pagesCount = Math.ceil(totalUsersCount / pageSize)
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//     return (
//         <div className={pageNumber_classes.pageNumber}>
//             {pages.map(p => {
//                 return (
//                     <span
//                         className={currentPage === p && pageNumber_classes.activePage}
//                         onClick={() => { onPageChanged(p) }} >{p}
//                     </span>
//                 )
//             })}
//         </div>
//     )
// }
// export default Pages


import { useState } from 'react'
import pageNumber_classes from './paginator.module.css'

let Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={pageNumber_classes.pageNumber}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Previous</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span
                            className={currentPage === p && pageNumber_classes.activePage}
                            onClick={() => { onPageChanged(p) }} >{p}
                        </span>
                        // <span
                        //     className={pageNumber_classes({ [pageNumber_classes.activePage]: currentPage === p }, pageNumber_classes.pageItem) && pageNumber_classes.activePage}
                        //     onClick={() => { onPageChanged(p) }} >{p}
                        // </span>
                    )
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
}
export default Paginator