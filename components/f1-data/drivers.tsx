import { ParsedDriverData } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TEAM_COLORS: { [key: string]: string } = {
  "Red Bull Racing": "text-[#3671c6]",
  Williams: "text-[#64c4ff]",
  RB: "text-[#6692ff]",
  McLaren: "text-[#ff8000]",
  Alpine: "text-[#ff87bc]",
  "Aston Martin": "text-[#229971]",
  Ferrari: "text-[#e8002d]",
  "Haas F1 Team": "text-[#b6babd]",
  "Kick Sauber": "text-[#00da02]",
  Mercedes: "text-[#27f4d2]",
};

export default function Drivers({ drivers }: { drivers: ParsedDriverData[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      {drivers.map((driver, idx) => (
        <DriverCard driver={driver} key={idx} />
      ))}
    </div>
  );
}

function DriverCard({ driver }: { driver: ParsedDriverData }) {
  return (
    <button className="text-left">
      <div className="w-full p-4 flex flex-col border rounded-md shadow-sm hover:bg-zinc-100 hover:dark:bg-zinc-900 transition">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <h1 className="text-xl">{driver.first_name.toUpperCase()}</h1>
            <h1 className="text-xl font-bold">
              {driver.last_name.toUpperCase()}
            </h1>
          </div>
          <span className="text-sm">{driver.country_code}</span>
        </div>
        <h2
          className={`${TEAM_COLORS[driver.team_name]} font-semibold text-sm`}
        >
          {driver.team_name}
        </h2>
        <div className="flex justify-between">
          <h1
            className={`${TEAM_COLORS[driver.team_name]} font-black text-2xl`}
          >
            {driver.driver_number}
          </h1>
          <Avatar>
            <AvatarImage
              className="bg-neutral-200 dark:bg-neutral-900"
              src={driver.headshot_url}
            />
            <AvatarFallback>{`${driver.first_name[0]}${driver.last_name[0]}`}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </button>
  );
}
