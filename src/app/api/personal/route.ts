import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const lat = requestUrl.searchParams.get('lat');
  const lon = requestUrl.searchParams.get('lon');
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m&timezone=Asia%2FTokyo`;

  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
}
