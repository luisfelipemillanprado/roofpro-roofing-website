import type { InlineScriptProps } from "@/common/inline-script/types";

/* next docs (preventing flash): runs from the server html, inert text/plain when the client renders it */
export const InlineScript = ({ html }: InlineScriptProps) => (
  <script
    type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
