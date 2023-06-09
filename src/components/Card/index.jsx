import React from "react";
import Styles from "./Card.module.scss";

export default function Card({ title, text, imgURL }) {
  const [isActive, setIsActive] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <div className={isActive ? `${Styles.card} ${Styles.active}` : Styles.card}>
      <div
        className={isActive ? `${Styles.bg} ${Styles.active}` : Styles.bg}
      ></div>
      <img src={imgURL} alt="" />
      <div className={Styles.textfield}>
        <div className={Styles.title}>{title}</div>
        <div
          className={isActive ? `${Styles.text} ${Styles.open}` : Styles.text}
        >
          {text}
        </div>
      </div>
      <div onClick={() => setIsLiked(!isLiked)} className={Styles.like}>
        {isLiked ? (
          <svg
            width="35"
            height="43"
            viewBox="0 0 47 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.9041 0.590393C29.675 0.590393 25.8898 2.64654 23.5299 5.80086C22.3246 4.18588 20.7594 2.8741 18.9586 1.96964C17.1578 1.06517 15.1709 0.592929 13.1557 0.590393C5.98255 0.590393 0.164581 6.43173 0.164581 13.6516C0.164581 16.4321 0.608523 19.0023 1.37958 21.3855C5.0713 33.0682 16.4502 40.0544 22.0813 41.9704C22.8757 42.2508 24.1841 42.2508 24.9786 41.9704C30.6096 40.0544 41.9885 33.0682 45.6802 21.3855C46.4513 19.0023 46.8952 16.4321 46.8952 13.6516C46.8952 6.43173 41.0773 0.590393 33.9041 0.590393Z"
              fill="#6A52FF"
            />
          </svg>
        ) : (
          <svg
            width="35"
            height="43"
            viewBox="0 0 48 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.727 7.07839L23.9276 8.6871L25.1302 7.07978C27.2203 4.28608 30.5689 2.47073 34.3033 2.47073C40.641 2.47073 45.7944 7.63348 45.7944 14.032C45.7944 16.6493 45.3771 19.0639 44.6523 21.3042L44.6522 21.3041L44.6491 21.3139C42.9107 26.8154 39.3439 31.2609 35.4781 34.5832C31.6057 37.9113 27.5195 40.0376 24.8946 40.9307L24.8865 40.9334L24.8785 40.9363C24.6918 41.0022 24.3476 41.061 23.9291 41.061C23.5106 41.061 23.1664 41.0022 22.9797 40.9363L22.9717 40.9334L22.9636 40.9307C20.3387 40.0376 16.2524 37.9113 12.38 34.5832C8.51425 31.2609 4.94749 26.8154 3.20904 21.3139L3.20907 21.3139L3.20592 21.3042C2.48112 19.0639 2.06375 16.6493 2.06375 14.032C2.06375 7.63379 7.21663 2.47124 13.5539 2.47073C15.3357 2.47312 17.0923 2.89072 18.6845 3.69041C20.277 4.49023 21.6611 5.65025 22.727 7.07839Z"
              stroke="#6A52FF"
              stroke-width="3"
            />
          </svg>
        )}
      </div>
      <button onClick={() => setIsActive(!isActive)} className={Styles.button}>
        {isActive ? "Свернуть" : "Читать далее"}
        <svg
          width="20"
          height="6"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0001 10C9.19251 10 8.3849 9.68596 7.77343 9.0695L0.251167 1.4859C0.0902455 1.32174 0 1.10024 0 0.869439C0 0.638638 0.0902455 0.417142 0.251167 0.252981C0.585746 -0.0843268 1.13953 -0.0843268 1.47411 0.252981L8.99638 7.83658C9.55016 8.39488 10.4501 8.39488 11.0039 7.83658L18.5261 0.252981C18.8607 -0.0843268 19.4145 -0.0843268 19.7491 0.252981C20.0836 0.590288 20.0836 1.14859 19.7491 1.4859L12.2268 9.0695C11.6153 9.68596 10.8077 10 10.0001 10Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}
