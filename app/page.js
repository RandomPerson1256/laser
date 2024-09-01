"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [number, setNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true);

  const getUrl = async () => {
    const response = await axios.get("http://localhost:3000/api/getUrl");
    setNumber(response.data.whatsappNumber)
    setImageUrl(response.data.imageUrl)
    setLoading(false);
  };

  useEffect(() => {
    getUrl();
  }, []);

  return (
    <>
      {loading && !number ? (
        <div className="flex bg-black text-white text-3xl items-center justify-center w-screen h-screen">
          Loading...
        </div>
      ) : (
        <a href={`https://wa.me/${number}`}>
          <div className=" flex w-full h-screen items-center justify-center">
            <img src={imageUrl} className="min-h-screen" />
          </div>
        </a>
      )}
    </>
  );
}
