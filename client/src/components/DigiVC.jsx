import React, { forwardRef } from "react";
import "../styles/DigiVC.css";
import { useStateContext } from "../context/StateContext";

const linkStyles = {
  color: "inherit",
  textDecoration: "none",
};

const iconStyles = {
  ...linkStyles,
  target: "_blank",
};

const flexCenter = {
  display: "flex",
  alignItems: "center",
};

const DigiVC = forwardRef((props, ref) => {
  const { form } = useStateContext();

  // Extract data from the form object
  const {
    headerImg,
    logoImg,
    companyName,
    designation,
    clientName,
    description,
    phoneNum,
    email,
    instagramId,
    whatsappNum,
    youtubeChannel,
    location,
    website,
    midImg,
    qrImage,
    footerImg,
  } = form;

  // Function to open the email client
  const handleEmailIconClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  // Function to open the phone dialer
  const handlePhoneIconClick = () => {
    const telLink = `tel:${phoneNum}`;
    window.location.href = telLink;
  };

  // Function to open the location in Google Maps
  const handleLocationIconClick = () => {
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(mapsLink, "_blank");
  };

  return (
    <div className="digivc-container" ref={ref}>
      <div className="left-image">leftimage</div>
      <div className="digivc-card" id="dvc">
        <div className="outer-border">
          <div className="mid-border">
            <div className="inner-border">
              {headerImg && (
                <div className="header-container">
                  <img
                    src={URL.createObjectURL(headerImg)}
                    alt="Header Image"
                    style={{ maxWidth: "100%" }}
                    className="headerImg"
                  />
                  {logoImg && (
                    <div className="digivc-logo-container">
                      <img
                        src={URL.createObjectURL(logoImg)}
                        alt="Logo Image"
                        className="digivc-logo"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="digital-vc-content">
                <h2>{companyName}</h2>
                <p>{designation}</p>
                <p>{clientName}</p>
                <p
                  style={{
                    maxWidth: "100%",
                    wordWrap: "break-word",
                  }}
                >
                  {description}
                </p>
                {phoneNum && (
                  <p>
                    <a
                      onClick={handlePhoneIconClick}
                      href={`tel:${phoneNum}`}
                      style={linkStyles}
                      target="_blank"
                    >
                      <i className="fas fa-phone"></i>
                    </a>
                    :{" "}
                    <a
                      onClick={handlePhoneIconClick}
                      href={`tel:${phoneNum}`}
                      style={linkStyles}
                      target="_blank"
                    >
                      {phoneNum}
                    </a>
                  </p>
                )}
                {email && (
                  <p>
                    <a
                      onClick={handleEmailIconClick}
                      href={`mailto:${email}`}
                      style={linkStyles}
                      target="_blank"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                    :{" "}
                    <a
                      onClick={handleEmailIconClick}
                      href={`mailto:${email}`}
                      style={linkStyles}
                      target="_blank"
                    >
                      {email}
                    </a>
                  </p>
                )}
                {instagramId && (
                  <p>
                    <a
                      href={`https://www.instagram.com/${instagramId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ ...linkStyles, target: "_blank" }}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    :{" "}
                    <a
                      href={`https://www.instagram.com/${instagramId}`}
                      target="_blank"
                      style={linkStyles}
                    >
                      {instagramId}
                    </a>
                  </p>
                )}
                <div className="mid-content">
                  {midImg && (
                    <img
                      className="midImage"
                      src={URL.createObjectURL(midImg)}
                      alt="midImg Image"
                      style={{
                        ...flexCenter,
                        width: "50%",
                        height: "100%",
                      }}
                    />
                  )}
                  <div
                    style={{
                      justifyContent: "center",
                      ...flexCenter,
                      flexDirection: "column",
                      gap: "25px",
                      alignItems: "end",
                    }}
                  >
                    {whatsappNum && (
                      <div
                        style={{
                          gap: "10px",
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                        className="icon-container"
                      >
                        <a
                          href={`https://wa.me/${whatsappNum}`}
                          style={iconStyles}
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                        :{" "}
                        <a
                          href={`https://wa.me/${whatsappNum}`}
                          style={linkStyles}
                        >
                          {whatsappNum}
                        </a>
                      </div>
                    )}
                    {youtubeChannel && (
                      <div
                        style={{
                          gap: "10px",
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                        className="icon-container"
                      >
                        <a
                          href={`https://www.youtube.com/${youtubeChannel}`}
                          style={iconStyles}
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                        :{" "}
                        <a
                          href={`https://www.youtube.com/${youtubeChannel}`}
                          style={linkStyles}
                        >
                          {youtubeChannel}
                        </a>
                      </div>
                    )}
                    {location && (
                      <div
                        style={{
                          gap: "10px",
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                        className="icon-container"
                      >
                        <a
                          onClick={handleLocationIconClick}
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            location
                          )}`}
                          style={iconStyles}
                        >
                          <i className="fas fa-map-marker-alt"></i>
                        </a>
                        :{" "}
                        <a
                          onClick={handleLocationIconClick}
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            location
                          )}`}
                          style={linkStyles}
                        >
                          {location}
                        </a>
                      </div>
                    )}
                    {website && (
                      <div
                        style={{
                          gap: "10px",
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                        className="icon-container"
                      >
                        <a href={website} style={linkStyles}>
                          <i className="fas fa-globe"></i>
                        </a>
                        :{" "}
                        <a href={website} style={linkStyles}>
                          {website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="qrContainer">
                  {qrImage && (
                    <img
                      src={URL.createObjectURL(qrImage)}
                      alt="QR Code"
                      className="qrCode"
                    />
                  )}
                </div>
              </div>

              {footerImg && (
                <img
                  src={URL.createObjectURL(footerImg)}
                  alt="Footer Image"
                  style={{
                    display: "flex",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  className="footerImg"
                />
              )}
              {headerImg && (
                <img
                  src={URL.createObjectURL(headerImg)}
                  alt="Header Image"
                  style={{ maxWidth: "100%" }}
                  className="headerImg"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="right-image">rightimage</div>
    </div>
  );
});

export default DigiVC;
