import React from "react";
import { useStateContext } from "../context/StateContext";

const Form = () => {
  const { form, updateForm } = useStateContext();

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files[0]) {
      if (name === "headerImg") {
        updateForm(name, files[0]);
      } else if (name === "logoImg") {
        updateForm(name, files[0]);
      } else if (name === "qrImage") {
        updateForm(name, files[0]);
      } else if (name === "footerImg") {
        updateForm(name, files[0]);
      } else if (name === "midImg") {
        updateForm(name, files[0]);
      }
    } else {
      updateForm(name, value);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          gap: "15px",
          maxWidth: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <label>
          Header Image:
          <input type="file" name="headerImg" onChange={handleInputChange} />
        </label>

        <label>
          Logo Image:
          <input type="file" name="logoImg" onChange={handleInputChange} />
        </label>

        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={form.companyName || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={form.designation || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Client Name:
          <input
            type="text"
            name="clientName"
            value={form.clientName || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={form.description || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNum"
            value={form.phoneNum || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Instagram ID:
          <input
            type="text"
            name="instagramId"
            value={form.instagramId || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mid Image:
          <input type="file" name="midImg" onChange={handleInputChange} />
        </label>

        <label>
          WhatsApp Number:
          <input
            type="text"
            name="whatsappNum"
            value={form.whatsappNum || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          YouTube Channel:
          <input
            type="text"
            name="youtubeChannel"
            value={form.youtubeChannel || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={form.location || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Website:
          <input
            type="url"
            name="website"
            value={form.website || ""}
            onChange={handleInputChange}
          />
        </label>

        <label>
          QR Image:
          <input type="file" name="qrImage" onChange={handleInputChange} />
        </label>

        <label>
          Footer Image:
          <input type="file" name="footerImg" onChange={handleInputChange} />
        </label>

        <button
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
