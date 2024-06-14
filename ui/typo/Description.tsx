import React from "react";

export function Description({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-200 p-4 rounded-lg text-lg text-justify font-light my-2">
      {children}
    </div>
  );
}
