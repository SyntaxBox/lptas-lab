"use client";
import { convertImageToPDF } from "@/utils";
import { Button } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

function DownloadImagePDF({
  src,
  title,
}: {
  src: string | StaticImageData;
  title: string;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleDownload = async () => {
    setIsDisabled(true);
    const pdf = await convertImageToPDF(
      typeof src === "string" ? src : src.src
    );
    // Download the PDF
    pdf.save(title);
    setIsDisabled(false);
  };
  return (
    <div className=" flex items-center justify-center">
      <Button
        colorScheme="linkedin"
        className="my-2 w-full md:w-[400px]"
        onClick={handleDownload}
        disabled={isDisabled}
      >
        {isDisabled ? "En cours..." : "Télécharger"}
      </Button>
    </div>
  );
}

export default DownloadImagePDF;
