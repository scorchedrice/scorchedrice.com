import {create} from "zustand/react";
import {useCategorySelectStoreType} from "@/shared/types/storeTypes";

const useCategorySelectStore = create<useCategorySelectStoreType>((set) => ({
  selectedCategory : "전체",
  actions: {
    setSelectedCategory: (selectedCategory ) => {
      set({selectedCategory})
    }
  }
}));

export const useSelectedCategory = () => useCategorySelectStore((state) => state.selectedCategory);
export const useSetSelectedCategory = () => useCategorySelectStore((state) => state.actions.setSelectedCategory);