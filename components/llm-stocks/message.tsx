"use client";

import { IconAI, IconUser } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex flex-col items-start gap-y-2">
      <div className="flex items-center h-8 gap-2 text-red-500">
        <IconUser />
        <span className="font-bold">You</span>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">{children}</div>
    </div>
  );
}

export function BotMessage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group flex flex-col items-start gap-y-2", className)}>
      <div className="flex items-center h-8 gap-2 shrink-0 select-none text-red-500">
        <IconAI />
        <span className="font-bold">AI</span>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">{children}</div>
    </div>
  );
}

export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode;
  showAvatar?: boolean;
}) {
  return (
    <div className="group flex flex-col items-start gap-y-2">
      <div
        className={cn(
          "flex items-center h-8 gap-2 shrink-0 select-none text-red-500",
          !showAvatar && "invisible"
        )}
      >
        <IconAI />
        <span className="font-bold">AI</span>
      </div>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "mt-2 flex items-center justify-center gap-2 text-xs text-gray-500"
      }
    >
      <div className={"max-w-[600px] flex-initial px-2 py-2"}>{children}</div>
    </div>
  );
}
