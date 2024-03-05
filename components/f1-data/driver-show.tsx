import { RawDriverData } from "@/lib/types";
import Image from "next/image";

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

export default function DriverShow({ driver }: { driver: RawDriverData }) {
  return (
    <div className="w-full border rounded-md shadow-sm">
      <div className="flex justify-between">
        <div className="p-6">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <h1 className="text-xl">{driver.first_name.toUpperCase()}</h1>
              <h1 className="text-xl font-bold">
                {driver.last_name.toUpperCase()}
              </h1>
              <span className="text-[10px] text-zinc-200">
                {driver.country_code}
              </span>
            </div>
          </div>
          <h2
            className={`${TEAM_COLORS[driver.team_name]} font-semibold text-sm`}
          >
            {driver.team_name}
          </h2>
          <h1
            className={`${TEAM_COLORS[driver.team_name]} font-black text-2xl`}
          >
            {driver.driver_number}
          </h1>
        </div>
        <div className="flex items-end pr-6">
          <Image
            src={driver.headshot_url}
            height={93}
            width={93}
            alt={`${driver.full_name}'s headshot`}
          />
        </div>
      </div>
    </div>
  );
}
