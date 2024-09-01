import Connection from "@/db/Connection";
import LASER from "@/db/Main";
import { NextResponse } from "next/server";

export const revalidate = 0; // this is the new line added


export async function GET(req,res){
    try {
        await Connection();
        const response = await LASER.findById('66d3ca6dad1be4672be75b1d').lean();
        if (!response) {
            return NextResponse.error("Data not found");
        }
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error("Something went wrong");
    }
}
