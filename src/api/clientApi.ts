import { Client } from '@/type/clientType';
import React from 'react'

const baseUrl = "http://localhost:3001";

export const getAllClients = async (): Promise<Client[]> => {
    const res = await fetch(`${baseUrl}/clients`,
        { cache: 'no-cache' });  //SSR
    return await res.json()
};

export const addClient = async (client: Client): Promise<Client[]> => {
    console.log("###addClient###");
    const res = await fetch(`${baseUrl}/clients`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)

        });
    const newClient = await res.json();
    return newClient
};

export const editClient = async (client: Client): Promise<Client[]> => {
    console.log("###editClient###");
    console.log(client);
    const res = await fetch(`http://localhost:3001/clients/${client.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName: client.firstName, lastName: client.lastName })
        });
    const editedClient = await res.json();
    return editedClient
};

export const deleteClient = async (client: Client): Promise<Client[]> => {
    console.log("###deleteClient###");
    console.log(client);
    const res = await fetch(`http://localhost:3001/clients/${client.id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    return await res.json();
};

