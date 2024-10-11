export default function Error({ message }: Readonly<{ message: string }>) {
  return (
    <div className="bg-red-500 px-4 py-3 text-white font-bold">{message}</div>
  );
}
