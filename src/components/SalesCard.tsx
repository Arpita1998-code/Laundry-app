import React from "react";

export type SalesProps = {
  no: string
  productName: string;
  status: string;
  sold: string;
  view: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div>

      <div className="mb-2 bg-blue-50 p-4 grid grid-cols-12 space-x-4">
          <p className="text-blue-800 font-semibold col-span-1 text-left">{props.no}</p>
          <p className="text-blue-800 font-semibold col-span-4 text-center">{props.productName}</p>
          <p className="text-cyan-400 font-semibold col-span-3 text-center">{props.status}</p>
          <p className="text-blue-800 font-semibold col-span-2 text-center">{props.sold}</p>
          <p className="text-blue-800 font-semibold col-span-2 text-right">{props.view}</p>
        </div>
      </div>
  );
}
