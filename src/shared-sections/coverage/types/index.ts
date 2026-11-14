/* the coverage strip track: area names only, non-interactive */
export interface CoverageListProps {
  areas: readonly string[];
}

export interface CoverageProps {
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
}
