import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { CheckList } from "@/common/check-item/components/CheckList";
import { Title } from "@/common/title/components/Title";
import { Text } from "@/common/text/components/Text";
import type { IncludedPanelProps } from "@/features/service-detail/types";

/* checklist panel: icon header with title and description over a divided checked list */
export const IncludedPanel = ({ icon, title, description, items }: IncludedPanelProps) => (
  <div className="grid content-start gap-6 rounded-panel border border-line bg-surface-panel px-6 pt-6 pb-6.5 shadow-md">
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
      <IconBadge icon={icon} size="feature" tone="muted" />
      <div className="grid gap-1.5">
        <Title as="h3" size="feature" weight="bold" text={title} />
        <Text size="body" tone="muted" text={description} />
      </div>
    </div>
    <div className="border-t border-line" />
    <CheckList tone="muted" items={items} />
  </div>
);
