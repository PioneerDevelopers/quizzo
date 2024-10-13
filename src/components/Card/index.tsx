import { ReactNode } from "react";

export interface ICardProps {
  children: ReactNode;
}
  
export default function BasicCard({ children }: ICardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}
  