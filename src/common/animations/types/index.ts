import type { ReactNode } from "react";

/* color keys resolved to color utilities inside PulseRing */
export type PulseColor = "primary" | "secondary" | "malachite";

export interface PulseRingProps {
  /* ring color key (resolved to a utility in PulseRing) */
  color: PulseColor;
  /* fully round the rings; defaults to the control radius */
  rounded?: boolean;
}

/* color keys resolved to color utilities inside LiveDot */
export type LiveDotColor = "malachite" | "citrine" | "cinnabar";

export interface LiveDotProps {
  /* dot and ring color key (resolved to a utility in LiveDot) */
  color: LiveDotColor;
}

/* loop duration keys resolved to animation utilities inside LoopTrack */
export type LoopSpeed = "base" | "slow";

/* travel direction; right replays the same loop backwards */
type LoopDirection = "left" | "right";

export interface LoopTrackProps {
  /* one copy of the track content, repeated to close the loop */
  children: ReactNode;
  /* repeated copies; keep even for the -50% restart */
  copies: number;
  /* loop duration key (resolved to a utility in LoopTrack) */
  speed: LoopSpeed;
  /* defaults to left */
  direction?: LoopDirection;
}
