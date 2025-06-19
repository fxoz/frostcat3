import type React from "react";

export default function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg p-4 bg-ctp-surface0 my-6 leading-normal opacity-90">
      {children}
    </div>
  );
}
