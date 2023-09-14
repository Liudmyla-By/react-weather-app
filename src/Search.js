import React from "react";
import "./App.css";

export default function Search() {
    return (
        <form className="search-form" id="search-form">
            <div className="row">
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a city..."
                        id="search-input"
                        autoComplete="off"
                    />
                </div>
                <div className="col-2">
                    <input type="submit" className="btn btn-light" value="Search" />
                </div>
                <div className="col-2">
                    <input
                        type="submit"
                        className="btn d-none d-md-block btn-light"
                        value="Current"
                        id="button"
                    />
                </div>
            </div>
        </form>
    );
}