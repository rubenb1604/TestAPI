import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    let items: string[] = [
        "Dies ist eine Test Nachricht, welche aus dem Internet kommt!"
    ];

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    return NextResponse.json({ item: randomItem });




}
