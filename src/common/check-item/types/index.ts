import type { TextTone } from "@/common/text/types";

export interface CheckItemProps {
  text: string;
  tone: TextTone;
}

export interface CheckListProps {
  items: string[];
  tone: TextTone;
}
