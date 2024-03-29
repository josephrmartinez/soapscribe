import { NextResponse } from "next/server";
import { formatReplicateReponse } from "@/app/lib/actions";
import { updateApptWithTranscript } from "@/app/lib/actions";

export async function GET(req) {
    console.log("GETing webhook route");
    console.log("apptid:", req.nextUrl.searchParams.get('apptid'))
    return NextResponse.json({ message: "GET" }, { status: 200 });
  }

export async function POST(req, res) {
    console.log("incoming webhook!");
    const apptid = req.nextUrl.searchParams.get('apptid');

    const prediction = await req.json();
    const predictionText = prediction.output.text
    
    console.log("predictionText from webhook:", predictionText)
    await updateApptWithTranscript(apptid, predictionText)

    return NextResponse.json({ message: "POST" }, { status: 200 });
  }