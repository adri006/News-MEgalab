import React from "react";
import Header from "./Header";
import Filtration from "./Filtration";

const Content = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Filtration />
            </div>
        </>
    )
}
export default Content;