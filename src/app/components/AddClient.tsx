"use client"

import { addClient } from '@/pages/api/clientApi';
import React, { ChangeEvent, FormEvent } from 'react'
import { v4 as uuidV4 } from 'uuid';
const AddClient = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await addClient({
            id: uuidV4(),
            firstName: firstName,
            lastName: lastName,
            email1: undefined,
            email2: undefined,
            mobPhone: undefined,
            fixedPhone: undefined,
            pref: undefined,
            city: undefined,
            address1: undefined,
            address2: undefined,
            birthday: undefined
        });
        setFirstName("");
        setLastName("");

    }

    return (
        <form onSubmit={handleSubmit}
            className="mb-4 space-y-3">
            <input type="text" placeholder="姓"
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setLastName(e.target.value)
                }}
                className="w-full border px-4 py-2 rounded-lg focus:outline-non focus:boder-blue-400"
            />
            <input type="text" placeholder="名"
                value={firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value)
                }}
                className="w-full border px-4 py-2 rounded-lg focus:outline-non focus:boder-blue-400"
            />
            <button type="submit"
                className="w-full border px-4 py-2 text-white bg-blue-500 rounded transform hover:scale-125 duration-500" >
                add client</button>
        </form >
    )
}

export default AddClient
