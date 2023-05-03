import React from "react";
import Header from "./Header";
import Filtration from "./Filtration";
import NewCard from "./NewCard";
import Footer from "./Footer";
import { news } from "../constants/news";

const Content = () => {
    
    const news_card = news.map((item) => {
        return(
            <>
            <NewCard
                date={item.date}
                title={item.title}
                text={item.text}
                img={item.img}
                />
            </>
        )
    })
    
    return (
        <>
            <Header />
            <div className="container flex-container">
                <Filtration />
                <div className="news_cards">
                    {news_card}
                </div>    
            </div>
            <Footer/>
        </>
    )
}

export default Content;