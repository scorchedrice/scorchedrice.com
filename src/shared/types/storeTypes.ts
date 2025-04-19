import {CategoryType} from "@/shared/types/categoryTypes";

export type useCategorySelectStoreType = {
  selectedCategory: CategoryType;
  actions: {
    setSelectedCategory: (selectedCategory: CategoryType) => void;
  }
}