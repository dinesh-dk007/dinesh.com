import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { DineshAvatar } from "./dinesh-avatar";
import { DineshCoverHello } from "./dinesh-cover-hello";
import { VerifiedIcon } from "./verified-icon";

export function Header() {
  return (
    <div className="relative mt-2">
      <div className="flex h-12" />
      <DineshCoverHello />

      <div className="screen-line-after flex border-x border-edge">
        <div className="shrink-0 border-r border-edge">
          <div className="mx-[2px] my-[3px]">
            <DineshAvatar className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end mask-r-from-60% pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-medium"}
            </div>
          </div>

          <div className="border-t border-edge">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-medium">
              {USER.displayName}
              &nbsp;
              <SimpleTooltip
                content={`Official website of ${USER.displayName}`}
              >
                <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
              </SimpleTooltip>
            </h1>

            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
