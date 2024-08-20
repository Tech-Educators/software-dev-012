export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
      <div className="w-[300px] h-[300px] bg-fuchsia-400 hover:bg-fuchsia-200 flex justify-center items-center">
        1
      </div>
      <div className="w-[300px] h-[300px] bg-fuchsia-400 hover:bg-fuchsia-200 flex justify-center items-center">
        2
      </div>
      <div className="w-[300px] h-[300px] bg-fuchsia-400 hover:bg-fuchsia-200 flex justify-center items-center">
        3
      </div>
    </div>
  );
}
