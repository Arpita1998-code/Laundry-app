import React from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

export type CardProps = {
  label: string;
  icon: IconType;
  amount: string;
  discription: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        
        <p className="text-2xl font-mono font-bold">{props.label}</p>
        
        <props.icon className="h-5 w-5 text-gray-900 font-bold" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-gray-600">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-lg border p-5 shadow-xl bg-blue-50",
        props.className
      )}
    />
  );
}

