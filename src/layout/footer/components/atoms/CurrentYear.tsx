"use client";

import { useId } from "react";
import { InlineScript } from "@/common/inline-script/components/InlineScript";

/* the year a static page was built goes stale; the script fixes it before paint, the client render on soft nav */
export const CurrentYear = () => {
  const id = useId();

  return (
    <>
      <span id={id} suppressHydrationWarning>
        {new Date().getFullYear()}
      </span>
      <InlineScript
        html={`{var n=document.getElementById(${JSON.stringify(id)});if(n)n.textContent=new Date().getFullYear()}`}
      />
    </>
  );
};
