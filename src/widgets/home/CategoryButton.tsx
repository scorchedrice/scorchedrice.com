import * as React from "react";
import {Button} from "@/components/ui/button";
import {useSelectedCategory, useSetSelectedCategory} from "@/shared/stores/useCategorySelectStore";
import {CategoryType} from "@/shared/types/categoryTypes";

export default function CategoryButton({categoryName} : {categoryName: CategoryType}) {
  const selectedCategory = useSelectedCategory();
  const setSelectedCategory = useSetSelectedCategory();
  return (
    <Button
      className={`mx-1 bg-transparent border-0 shadow-transparent ${selectedCategory === categoryName ? 'text-[#02DBC6]' : 'text-black'} hover:bg-gray-200`}
      onClick={() => setSelectedCategory(categoryName)}
    >
      {categoryName}
    </Button>
  )
}