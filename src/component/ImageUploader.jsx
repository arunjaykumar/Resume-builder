import React, { useState } from "react";

function ImageField() {
    const [selectedImage, setSelectedImage] = useState(null);
  
    function handleImageSelect(event) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  
    return (
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            marginTop:"30px",
            border: "1px solid black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {selectedImage ? (
            <img src={selectedImage} alt="Selected Image" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          ) : (
            <span style={{ color: "light-blue" }}>Change Profile Photo</span>
          )}
        </div>
        <label htmlFor="profile-pic" style={{margin: '20px', cursor: "pointer",justifyContent: "center",width:"fit-content" }}>
          Chaange Profile Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          id="profile-pic"
          style={{ display: "none" }}
        />
      </div>
    );
  }
  
  export default ImageField;
  