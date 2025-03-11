import React from "react";

export default function PropertiesHeading({
  required = false,
  children,
}: {
  required: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between my-1">
      <div className="grow">{children}</div>
      {required && (
        <p className=" text-xs rounded-full text-white bg-red-500 px-2 py-1 self-end -translate-y-2">
          Required
        </p>
      )}
    </div>
  );
}
