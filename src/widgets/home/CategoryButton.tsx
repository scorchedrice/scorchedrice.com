import * as React from "react";
import {CategoryType} from "@/shared/types/categoryTypes";
import {Link} from "gatsby";
import {Button} from "@/components/ui/button";
import { useLocation } from "@reach/router";
import clsx from "clsx";

export default function CategoryButton({categoryName} : {categoryName: CategoryType}) {
  let categoryUrl;
  switch (categoryName) {
    case "개발":
      categoryUrl = "/category/develop/page/1"
      break
    case "프로젝트":
      categoryUrl = "/category/project/page/1"
      break;
    default:
      categoryUrl = "/"
      break;
  }
  const location = useLocation();
  const path = location.pathname.split('/');
  let isActive;
  if (path[1] === 'category') {
    if (path[2] === 'develop') {
      isActive = '개발'
    } else if (path[2] === 'project') {
      isActive = '프로젝트'
    }
  } else {
    isActive = '전체'
  }
  return (
    <Link to={categoryUrl}>
      <Button
        className={clsx(
          "bg-transparent border-none shadow-none h-auto text-base font-normal transition text-black dark:text-gray-300 hover:bg-transparent",
          isActive === categoryName && "underline underline-offset-4"
        )}
      >
        {categoryName}
      </Button>
    </Link>
  )
}