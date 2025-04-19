import * as React from "react";
import {useSiteMetaData} from "@/features/useSiteMetaData";

export default function SEOTitle({title} : {title: string}) {
  const siteMetaData = useSiteMetaData();
  return (
    <title>{title} | {siteMetaData.title}</title>
  )
}