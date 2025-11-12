
type User = {
    id: string,
    name: string,
}

const Users = async () => {
    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await getUsers.json();
    return (
        <>
            <b>Server Users Page</b>
            {users.map((x: User) => ( 
                <div key={x.name}>{x.name}</div>  
            ))}
        </>
    )
}

export default Users;