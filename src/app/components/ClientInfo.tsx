"use client";
import { deleteClient, editClient } from '@/pages/api/clientApi';
import { Client } from '@/type/clientType';
import React, { ChangeEvent, useEffect } from 'react'

interface ClientProps {
    client: Client;
};

const ClientInfo = ({ client }: ClientProps) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleSave = async () => {
        setIsEditing(false)
        await editClient({ ...client, firstName: updateFirstName, lastName: updateLastName })
    }
    const handleDelete = async () => {
        setIsEditing(false)
        await deleteClient(client)
    }
    const [updateFirstName, setUpdateFirstName] = React.useState(client.firstName);
    const [updateLastName, setUpdateLastName] = React.useState(client.lastName);
    const ref = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

    return (
        <li key={client.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            {isEditing ? (
                <>
                    <input type="text" placeholder="姓"
                        ref={ref}
                        value={updateLastName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setUpdateLastName(e.target.value);
                        }}
                        className="w-full border px-4 py-2 rounded-lg focus:outline-non focus:boder-blue-400" />
                    <input type="text" placeholder="名"
                        value={updateFirstName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setUpdateFirstName(e.target.value);
                        }}
                        className="w-full border px-4 py-2 rounded-lg focus:outline-non focus:boder-blue-400" />
                    <div>
                        <button onClick={handleSave}
                            className="text-blue-500 mr-3">
                            save
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span>{client.lastName}</span>
                    <span>{client.firstName}</span>
                    <div>
                        <button onClick={handleEdit}
                            className="text-green-500 mr-3">edit</button>
                        <button onClick={handleDelete} className="text-red-500 mr-3">delete</button>
                    </div >
                </>
            )
            }
        </li >
    )
}


export default ClientInfo;