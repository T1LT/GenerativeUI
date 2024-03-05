export async function POST(req: Request) {
  const { driver_number } = await req.json();

  try {
    const res = await fetch(
      `https://api.openf1.org/v1/drivers?driver_number=${driver_number}&session_key=latest`
    );
    const [driver] = await res.json();

    return new Response(JSON.stringify(driver));
  } catch (err) {
    console.error(err);
  }
}
