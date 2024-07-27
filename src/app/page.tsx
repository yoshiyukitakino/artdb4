import Image from "next/image";
import Link from "next/link";
import AddClient from "@/app/components/AddClient";
import ClientList from "@/app/components/ClientList";
import { getAllClients } from "@/pages/api/clientApi";

export default async function Page() {
  const clients = await getAllClients();
  console.log(clients);

  return (
    <main className="flex flex-col items-center justify-centor min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">Hello</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadouw-md rounded-lg">
          <AddClient />
          <ClientList clients={clients} />
        </div>
      </div>
    </main>
  );
}
