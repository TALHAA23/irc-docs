type Notes = "info" | "warn" | "good-to-know" | "also-know" | "avoid";
export default function Note({
  note,
  children,
}: {
  note: Notes;
  children: React.ReactNode;
}) {
  return (
    <div className={note + ` w-full rounded text-sm px-3 py-1 my-1`}>
      <p className=" text-right text-black dark:text-white bg-black/15 dark:bg-white/15 w-fit ml-auto text-xs px-2 py-1 rounded-full">
        {note}
      </p>
      <p>{children}</p>
    </div>
  );
}
