import React from "react";
import "./app.css";
import QRCODE from "./instructions/images/image-qr-code.png";

export default function () {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={QRCODE} alt="QR_CODE" />
          </div>
          <div className="card-body">
            <p className="bold-text">
              Improve your front-end skills by building projects
            </p>
            <p className="small-text">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>

        <div className="distribution">
          <i>
            <small>
              Developed by &nbsp;
              <a href="https://github.com/katongole-isaac/qr-code">isaac</a>
            </small>
          </i>
        </div>
      </div>
    </>
  );
}
