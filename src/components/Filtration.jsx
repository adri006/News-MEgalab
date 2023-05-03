import React from "react";

const Filtration = () => {
    return (
        <>
            <div className="filt">
                <h3 className="filt-title">Фильтрация</h3>
                <div className="mb-3 form-check form-check-top">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Спорт</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Политика</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Звезды</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Искусство</label>
                </div>
                <div className="mb-3 form-check ">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Мода</label>
                </div>
                <button type="submit" className="btn filt-button d-flex align-items-center justify-content-center">Применить</button>
            </div>
        </>
    )
}
export default Filtration;