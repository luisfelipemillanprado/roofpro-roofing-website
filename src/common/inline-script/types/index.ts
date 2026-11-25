export interface InlineScriptProps {
  /* trusted, hand-written js: it runs while the html parses, before react hydrates */
  html: string;
}
