import { cn } from "@/lib/cn";

import { Hello } from "./hello";

export function DineshCoverHello() {
  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none md:aspect-3/1",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-zinc-950/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <div className="flex size-full justify-center">
        <Hello />
      </div>
    </div>
  );
}
