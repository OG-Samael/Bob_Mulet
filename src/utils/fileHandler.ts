import { promises as fs } from "fs";
import path from "path";

function getDataPath(fileName: string) {
  return path.join(process.cwd(), "src", "data", fileName);
}

export async function readJSON<T>(fileName: string): Promise<T> {
  const filePath = getDataPath(fileName);

  try {
    const data = await fs.readFile(filePath, "utf8");

    
return JSON.parse(data) as T;
  } catch (error: any) {
    if (error.code === "ENOENT") {
      console.warn(`⚠ File not found: ${fileName}. Returning empty array.`);
      
return [] as T;
    }

    throw error;
  }
}

export async function writeJSON(fileName: string, data: any): Promise<void> {
  const filePath = getDataPath(fileName);

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}
