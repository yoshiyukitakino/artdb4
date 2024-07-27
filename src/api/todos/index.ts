import { NextApiRequest, NextApiResponse } from "next";

type Todo = {
    title: string;
};

const todos: Todo[] = [
    { title: "読書" },
    { title: "プログラム" },
    { title: "散歩" },
    { title: "花札" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    res.status(200).json(todos);
}