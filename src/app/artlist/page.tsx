import Image from "next/image";
import { Art } from "@/pages/api/excelapi/";

async function getData() {
    const res = await fetch("http://localhost:3000/api/excelapi", { cache: "no-store" });
    return res.json();
}

export default async function Page() {
    const artlist: Art[] = await getData();
    return (
        <>
            <h1>Todos</h1>
            <table className="border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">VHS NO</th>
                        <th className="border border-slate-600">DVD NO</th>
                        <th className="border border-slate-600">タイトル</th>
                        <th className="border border-slate-600">女優</th>
                        <th className="border border-slate-600">監督</th>
                        <th className="border border-slate-600">発売年</th>
                    </tr>
                </thead>
                <tbody>
                    {artlist.map((art, index) => (
                        <tr key={index} >
                            <td className="border border-slate-700 ...">{art.no}</td>
                            <td className="border border-slate-700 ...">{art.advr}</td>
                            <td className="border border-slate-700 ...">{art.title}</td>
                            <td className="border border-slate-700 ...">{art.actor}</td>
                            <td className="border border-slate-700 ...">{art.director}</td>
                            <td className="border border-slate-700 ...">{art.year}</td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </>
    );
}
