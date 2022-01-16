import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTylH2yNmquIorMDnhsLE6K_43gPL7Vn0Dlg&usqp=CAU"
        alt="Error"
        className="card-img"
      />
      <div className="card-stats">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0NUlC0b6B4rOXRmGiQL8I-18J1kpNu0DnA&usqp=CAU"
          alt="Error"
          id="review-star"
        />
        <span className="gray">5.0</span>
        <span className="gray">(8) - </span>
        <span className="gray">Russia</span>
      </div>
      <p>Life lessons with Kate Milkonivic</p>
      <p><b>From $100</b>/person</p>
    </div>
  );
}
