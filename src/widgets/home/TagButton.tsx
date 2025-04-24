import * as React from "react";
import {Button} from "@/components/ui/button";
import {navigate} from "gatsby";

const TagButton = ({tagName} : {tagName: string}) => {
 return (
   <Button
     className="bg-gray-300 rounded-xl p-2 text-[12px] text-gray-700 mr-1 shrink-0"
     onClick={() => navigate("/search", {
      state: { defaultValue: tagName }
     })}
   >
    {tagName}
   </Button>
 )
}

export default TagButton;