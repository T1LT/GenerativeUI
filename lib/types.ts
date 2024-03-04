export type RawDriverData = {
  session_key: number,
  meeting_key: number,
  broadcast_name: string,
  country_code: string,
  first_name: string,
  last_name: string,
  full_name: string,
  headshot_url: string,
  driver_number: string,
  team_colour: string | number,
  team_name: string,
  name_acronym: string,
};

export type ParsedDriverData = Omit<RawDriverData, "session_key" | "meeting_key" | "broadcast_name" | "full_name">;