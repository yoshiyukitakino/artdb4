import { Client } from '@/type';
import React from 'react'
import ClientInfo from './ClientInfo';

interface ClientListProps {
    clients: Client[];
};

const ClientList = ({ clients }: ClientListProps) => {
    return (
        <ul className="space-y-3">

            {
                clients.map((client) => (
                    <ClientInfo key={client.id} client={client} />
                ))
            }
        </ul>
    )
}

export default ClientList
