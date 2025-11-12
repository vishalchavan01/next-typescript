'use client';

import { useEffect, useState } from "react";

type User = {
    id: string,
    name: string,
}

const Users = () => {
    const[users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        const getUsers = async () => {
            const users = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await users.json())
        };
        getUsers();
    },[])

    return (
        <>
            <b>Client Users Page</b>
            {users.map((x: User) => ( 
                <div key={x.name}>{x.name}</div>  
            ))}
        </>
    )
}

export default Users;