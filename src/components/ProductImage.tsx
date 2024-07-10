"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { fallbackImage } from "@/lib/utils";

const ProductImage = (props: ImageProps) => {
  const [src, setSrc] = useState(props.src);
  return (
    <div className="p-2">
      <Image
        {...props}
        alt={props.alt}
        src={src}
        onError={() => setSrc(fallbackImage)}
      />
    </div>
  );
};

export default ProductImage;
