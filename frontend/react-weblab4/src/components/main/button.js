import React from "react"

const BackButton = ({value, onClick}) => {
    return (
        <div className="container centered">
            <div className="container-content">
                <button className="submit-btn green" onClick={onClick}>
                    {value}
                </button>
            </div>
        </div>
    );
}

export default BackButton;
