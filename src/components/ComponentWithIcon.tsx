"use client";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
export default function ComponentWithIcon({
  Component,
  callback,
}: {
  Component: JSX.Element;
  callback: () => void;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`flex items-center gap-0.5`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {Component}
      {show && <EyeIcon onClick={callback} />}
    </div>
  );
}
