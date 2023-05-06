import React from "react";
import style from "../../styles/CardProjects.module.css";

const CardProjects = (props) => {
  return (
    <div className={style.card}>
      <img src={props.img} alt="" />
      <h2 className={style.title}>{props.title}</h2>
      <div className={style.details}>
        <p>{props.text}</p>
        <div className={style.views}>
          <a
            href={props.view}
            className={style.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a
            href={props.src}
            className={style.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
