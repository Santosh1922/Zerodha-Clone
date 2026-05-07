import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      
      <h1 className="mb-3">The Zerodha Universe</h1>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row justify-content-center">

        {[
          { img: "media/images/smallcaseLogo.png", text: "Thematic investment platform" },
          { img: "media/images/streakLogo.png", text: "Algo & strategy platform" },
          { img: "media/images/sensibullLogo.svg", text: "Options trading platform" },
          { img: "media/images/zerodhaFundhouse.png", text: "Asset management" },
          { img: "media/images/goldenPiLogo.png", text: "Bonds trading platform" },
          { img: "media/images/dittoLogo.png", text: "Insurance" }
        ].map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-5">
            <img
              src={item.img}
              alt="logo"
              style={{ width: "120px", height: "auto" }}
              className="mb-3"
            />
            <p className="text-muted small">{item.text}</p>
          </div>
        ))}

      </div>

      <button className="btn btn-primary px-4 py-2 fs-5">
        Signup Now
      </button>

    </div>
  );
}

export default Universe;