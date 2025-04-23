import * as React from "react";

const TagButton = ({tagName} : {tagName: string}) => {
 return (
   <div className="bg-gray-300 rounded-2xl p-1 text-[12px] text-gray-700 mr-1 shrink-0">
    {tagName}
   </div>
 )
}

export default TagButton;