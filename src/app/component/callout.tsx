// src/components/Callout.tsx
import { ReactNode } from "react";
import clsx from "clsx";

interface CalloutProps {
  type?: "info" | "tip" | "warning";
  children: ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const base = "p-4 rounded-xl border-l-4 my-6";
  const styles = {
    info: "bg-blue-50 border-blue-400 text-blue-900",
    tip: "bg-green-50 border-green-400 text-green-900",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-900",
  };

  return <div className={clsx(base, styles[type])}>{children}</div>;
}
