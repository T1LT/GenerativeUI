export default function DriversSkeleton() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      {Array(10).map((_, idx) => (
        <DriverCardSkeleton key={idx} />
      ))}
    </div>
  );
}

function DriverCardSkeleton() {
  return (
    <div className="w-full p-4 flex flex-col border rounded-md shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <h1 className="text-xl text-transparent w-fit bg-zinc-700 rounded-md">
            {"XXXXXXXXXXXXXX"}
          </h1>
        </div>
        <span className="text-sm text-transparent w-fit bg-zinc-700 rounded-md">
          {"XXX"}
        </span>
      </div>
      <h2
        className={`font-semibold text-sm text-transparent w-fit bg-zinc-700 rounded-md`}
      >
        {"XXXXXXXXXXXXXXX"}
      </h2>
      <div className="flex justify-between">
        <h1
          className={`font-black text-2xl text-transparent w-fit bg-zinc-700 rounded-md`}
        >
          {"XX"}
        </h1>
        <div className="bg-zinc-700 w-10 h-10 rounded-full"></div>
      </div>
    </div>
  );
}
