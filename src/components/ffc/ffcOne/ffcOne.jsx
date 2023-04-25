import React from "react";
import TitleFFC from "../titleFFC/titleFFC";
import "./ffcOne.css";

function ffcOne() {
  return (
    <div className="ffc-content">
      <div className="ffc-body-content">
        <div>
          <div>
            <TitleFFC title="เหตุผลในการลงทุน" />
          </div>
          <textarea
            className="input-newInvest-pj"
            style={{ height: "300px", width: "1000px" }}
            type="textarea"
            name="uname"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default ffcOne;
