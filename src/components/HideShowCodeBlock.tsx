export default function HideShowCodeBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <details className=" my-2 border rounded py-2 border-black/15 dark:border-white/25">
      <summary className=" cursor-pointer text-sm px-2">Response</summary>
      {children}
    </details>
  );
}
