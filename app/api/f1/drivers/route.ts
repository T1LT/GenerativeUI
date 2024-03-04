import { RawDriverData } from "@/lib/types";

export async function GET(req: Request) {
  try {
    const res = await fetch(
      "https://api.openf1.org/v1/drivers?session_key=latest"
    );
    let rawDriversData = await res.json();

    const drivers = rawDriversData.map((driver: RawDriverData) => {
      return {
        first_name: driver.first_name,
        last_name: driver.last_name,
        headshot_url: driver.headshot_url,
        country_code: driver.country_code,
        team_name: driver.team_name,
        team_colour: driver.team_colour,
        name_acroynm: driver.name_acronym,
        driver_number: driver.driver_number,
      };
    });

    return new Response(JSON.stringify(drivers));
  } catch (err) {
    console.error(err);
  }
}
