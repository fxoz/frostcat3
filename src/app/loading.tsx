// Original code from: https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/pulse-2.svg
// Licensed under MIT. This is a modified version of the original code.

"use client";

import type React from "react";
import LoadingAnimation from "@/components/common/LoadingAnimation";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-96">
      <LoadingAnimation />
    </div>
  );
}
