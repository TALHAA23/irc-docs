type Notes = "info";
export default function Note({
  note,
  children,
}: {
  note: Notes;
  children: React.ReactNode;
}) {
  return (
    <div className={note + ` w-full rounded text-sm px-3 py-1 my-1`}>
      <p className=" text-right text-white">{note}</p>
      <p>{children}</p>
    </div>
  );
}
