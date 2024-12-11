import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col p-16 border-black border-2 rounded-2xl w-fit m-16 font-sans text-2xl">
            <span>Type: <b>GET</b></span>
            <span>Response-Type: <b>JSON</b></span>
            <span>Base-URL: <b>https://testapi-kappa-three.vercel.app/</b></span>
            <span>Endpoint: <b>/api/Challenge1/final</b></span>
        </div>
    );
}
