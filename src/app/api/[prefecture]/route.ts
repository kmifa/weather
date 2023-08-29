import { NextResponse } from 'next/server';
import { getPrefecture } from '@/lib/prefecture';

export async function GET(request: Request, { params }: { params: { prefecture: string } }) {
  const prefecture = getPrefecture(params.prefecture);
  const lat = prefecture?.lat;
  const lon = prefecture?.lon;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m&timezone=Asia%2FTokyo`;

  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
}
