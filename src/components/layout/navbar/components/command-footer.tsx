import { CornerDownLeftIcon } from "lucide-react";

import { ACTION_HINT } from "../../constant";
import { SearchActionType } from "../../types";
import { CommandMenuKbd } from "./command-kbd";

export function CommandMenuFooter({ hint, type }: { hint?: string; type: SearchActionType }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t bg-card px-4 text-muted-foreground text-xs">
      <span className="flex items-center gap-1">
        <CommandMenuKbd>↑</CommandMenuKbd>
        <CommandMenuKbd>↓</CommandMenuKbd>
        to navigate
      </span>
      <div className="flex items-center gap-2 font-medium">
        <CommandMenuKbd>
          <CornerDownLeftIcon />
        </CommandMenuKbd>
        {ACTION_HINT[type]}
      </div>
      <span className="ml-auto hidden text-[0.625rem] md:inline">{hint}</span>
      <span className="ml-auto flex items-center gap-1 text-[0.625rem]">
        <CommandMenuKbd>esc</CommandMenuKbd>
        to close
      </span>
    </div>
  );
}
