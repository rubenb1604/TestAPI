import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const path = url.pathname;

    const type = path.split('/').pop();

    let items: string[] = []

    switch (type) {
        case "pico-w":
            items = ["Schau bei https://testapi-kappa-three.vercel.app/documentation im Webbrowser!"]
            break;
        case "final":
            items = ["CHALLENGE GESCHAFFT!"]
            break;
        default:
            items = ["Wrong Key"];
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    return NextResponse.json({ item: randomItem });

}
