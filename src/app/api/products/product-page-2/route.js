import { NextResponse } from 'next/server';

const url = `https://api.timbu.cloud/products?organization_id=6c7a9a3fe65040438e0b78d35618b0e9&reverse_sort=false&page=2&size=10&Appid=${process.env.TIMBU_API_ID}&Apikey=${process.env.TIMBU_API_KEY}`;

export async function GET() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log('[PRODUCT_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
