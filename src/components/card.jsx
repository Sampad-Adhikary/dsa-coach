import React from "react";

export default function CardGroup() {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="cardHeading">Array</h5>
        <h6 class="cardSub">Total Questions: </h6>
        <h6 class="cardSub">Attempted: </h6>
        <button className="cardBtn">Start Now</button>
      </div>
    </div>
  );
}
