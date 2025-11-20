import React from "react";

interface Props {
  children: React.ReactNode;
}

export const IconBox = ({ children }: Props) => {
  return (
    <div className="card flex items-center justify-center rounded-full bg-card/20 p-1.5 backdrop-blur-md">
      <div className="flex size-10 items-center justify-center rounded-full bg-card/90 shadow-sm">{children}</div>
    </div>
  );
};
