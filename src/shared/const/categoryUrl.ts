type KoreanCategoryType =
  "전체"|
  "개발"|
  "프로젝트"

export function categoryConverter(koreanCategoryName : KoreanCategoryType) {
  if (koreanCategoryName === "개발") return "develop";
  if (koreanCategoryName === "프로젝트") return "project";
  return ""
}