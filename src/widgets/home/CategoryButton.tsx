import * as React from "react";
import {CategoryType} from "@/shared/types/categoryTypes";
import {Link} from "gatsby";

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
  return (
    <Link
      to={categoryUrl}
      className={`mx-1 bg-transparent border-0 shadow-transparent} hover:bg-gray-200`}
    >
      {categoryName}
    </Link>
  )
}