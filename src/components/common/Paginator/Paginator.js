import s from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPage}) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  return <>
    {
      pages.map((p, i) => {
          const pageStyle = p === currentPage ? s.active_page : "";
          return (
            <span key={i}
                  className={pageStyle}
                  onClick={() => setCurrentPage(p)}> {p} </span>
          )
        }
      )}
    </>
}

export default Paginator;