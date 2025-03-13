import { ReactNode } from "react";

interface ContainerGridProps {
  children: ReactNode; // Tipando o children como ReactNode
}

export function ContainerGrid({ children }: ContainerGridProps) {
  return <div className="max-w-[86rem] mx-auto">{children}</div>;
}
