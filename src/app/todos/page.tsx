import Image from "next/image";

async function getData() {
    const res = await fetch("http://localhost:3000/api/todos", { cache: "no-store" });
    return res.json();
}

type Todo = {
    title: string;
};

export default async function Page() {
    const todos: Todo[] = await getData();
    return (
        <>
            <h1>Todos</h1>
            {todos.map((todo, index) => (
                <div key={index}> {todo.title}</div >
            ))
            }
        </>
    );
}
