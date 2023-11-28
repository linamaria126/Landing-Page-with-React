import React from "react";

const Card = ({ image }) => {
  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <img src={image} />
        <div className="card-body d-flex flex-column align-items-center">
          <h4 className="card-title fw-bold">Card title</h4>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil et
            rem commodi ab aliquid facilis, quis, perferendis sapiente
            blanditiis omnis unde a esse
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
