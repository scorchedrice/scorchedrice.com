import { Link } from "gatsby";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
  const isAll = category === "전체";

  const getPageLink = (page: number) => {
    if (isAll) {
      return page === 1 ? "/" : `/page/${page}`;
    }
    return `/category/${category}/page/${page}`;
  };

  return (
    <div className="flex justify-center space-x-2 mt-10">
      {Array.from({ length: totalPages }).map((_, idx) => {
        const page = idx + 1;
        const link = getPageLink(page);
        const isActive = currentPage === page;
        return (
          <Link
            key={page}
            to={link}
            className={`px-3 py-1 rounded text-sm font-medium border 
              ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground"}`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
