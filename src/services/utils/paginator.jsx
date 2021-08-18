import React, { useState } from 'react'
import s from '../../components/dashboard/Dashboard.module.css'
export const Paginator = ({
  totalItemsCount = 100,
  pageSize,
  portionSize = 10,
  setLocalPage,
  currentPage,
}) => {
  let pages = []

  for (let i = 1; i <= totalItemsCount; i++) {
    pages.push(i)
  }
  let [currentPortionNumber, setCurrentPortion] = useState(1)
  let portionCount = Math.ceil(totalItemsCount / pageSize)
  let rightPortionPageNumber = currentPortionNumber * portionSize
  let leftPortionPageNumber = (currentPortionNumber - 1) * portionSize + 1
  return (
    <div>
      {currentPortionNumber > 1 && (
        <button onClick={() => setCurrentPortion(currentPortionNumber - 1)}>
          Prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? s.selectedPage : s.spanPage}
              key={p}
              onClick={() => {
                setLocalPage(p)
              }}
            >
              {p}
            </span>
          )
        })}
      {currentPortionNumber < portionCount && (
        <button onClick={() => setCurrentPortion(currentPortionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  )
}
