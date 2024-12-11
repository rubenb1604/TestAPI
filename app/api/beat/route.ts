import { NextResponse } from 'next/server';

let ledStatus = false;
const toggleLedStatus = () => {
    ledStatus = !ledStatus;
};
setInterval(toggleLedStatus, 3000);
export async function GET() {
    return NextResponse.json({ status: ledStatus });
}
