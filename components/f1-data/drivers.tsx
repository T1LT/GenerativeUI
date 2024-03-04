import { ParsedDriverData } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
    <div className="w-full p-4 flex flex-col border rounded-md shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <h1 className="text-xl">{driver.first_name.toUpperCase()}</h1>
          <h1 className="text-xl font-bold">
            {driver.last_name.toUpperCase()}
          </h1>
        </div>
        <span className="text-sm">{driver.country_code}</span>
      </div>
      <h2 className={`text-[#${driver.team_colour}]`}>{driver.team_name}</h2>
      <div className="flex justify-between">
        <h1 className="font-black text-2xl">{driver.driver_number}</h1>
        <Avatar>
          <AvatarImage className="bg-neutral-200 dark:bg-neutral-900" src={driver.headshot_url} />
          <AvatarFallback>{`${driver.first_name[0]}${driver.last_name[0]}`}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
