import React from "react";
import mac from "../media/mac-img.jpg";
import share from "../media/share.svg"

const NewCard = ({ date, title, text, img }) => {
    return (
            <div className="news-card d-flex">
                <div>
                    <img src={img} alt="#" />
                </div>
                <div className="news-desc">
                    <p className="news-date">{date}</p>
                    <h2 className="news-title">{title}</h2>
                    <p className="news-text">{text}</p>
                    <a href="#" className="news-more">Читать дальше</a>
                    <div className="share">
                        <img src={share} alt="#" />
                    </div>
                </div>
            </div>
    )
}

export default NewCard;