interface Props {
  imageUrl: string;
}

import { ChangeEvent, useEffect, useState } from "react";
import "./image-picker.css";

export default function ImagePicker({ imageUrl }: Props) {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const terget = e.target;
        if (terget) {
          setSelectedImage(terget.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="App">
      <div className="img-container">
        <div className="content-overlay">
          <label htmlFor="files">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </label>
          <input
            id="files"
            type="file"
            accept="image/*"
            style={{ opacity: 0 }}
            onChange={handleImageChange}
          />
        </div>
        <img
          className="selected-image dp"
          src={selectedImage ? selectedImage : imageUrl}
          alt="Selected Image"
        />
      </div>
    </div>
  );
}
