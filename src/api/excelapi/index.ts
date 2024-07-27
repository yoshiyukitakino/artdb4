import ExcelJS from "exceljs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from 'fs';

export type Art = {
    no: string | null;
    advr: string | null;
    category: string | null;
    actor: string | null;
    title: string | null;
    director: string | null;
    advvsr: string | null;
    dvd: string | null;
    advo: string | null;
    year: string | null;
    notes: string | null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const artlist: Art[] = [];

    try {
        console.log("start artlist");
        const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
        console.log("new ExcelJS.Workbook()");
        const filePath = path.join('c:/dev2', 'ARTLIST_back.xlsx');
        console.log(`filepath:::${filePath}`);

        if (!fs.existsSync(filePath)) {
            console.error('File not found:', filePath);
            res.status(404).json({ error: 'File not found' });
            return false;
        }

        await workbook.xlsx.readFile(filePath);
        console.log("workbook.xlsx.readFile");
        const worksheet: ExcelJS.Worksheet | undefined = workbook.getWorksheet('aaa');
        if (!worksheet) {
            console.log("worksheet error");
            res.status(202).json([]);
            return false;
        }
        console.log("workbook.getWorksheet");
        worksheet.pageSetup = { orientation: 'portrait' };
        const startRow = 1;
        const endRow = 3000;
        let row = worksheet.getRow(1);
        for (let i = startRow; i < endRow; i++) {
            row = worksheet.getRow(i);
            //            if (row.getCell(2).value === null) {
            //                break;
            //            }
            console.log(row.getCell(1).value);
            const art: Art = {
                no: row.getCell(2).text,
                advr: row.getCell(3).text,
                category: row.getCell(4).text,
                actor: row.getCell(5).text,
                title: row.getCell(6).text,
                director: row.getCell(7).text,
                advvsr: row.getCell(8).text,
                dvd: row.getCell(9).text,
                advo: row.getCell(10).text,
                year: row.getCell(11).text,
                notes: row.getCell(12).text,
            }
            artlist.push(art);
            console.log(art);
        }
        console.log("complete load data");
        res.status(200).json(artlist);

    } catch (e) {
        console.error(e);
        console.error("Error, load data");
        res.status(202).json([]);
    }
};