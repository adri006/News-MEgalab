import React from "react";
import Header from "./Header";

const Content = () => {
    return (
        <>
            <Header />
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                
        </>
    )
}
export default Content;