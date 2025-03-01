import React from "react";

const Button = ({ children, type, onClick, classes }) => {
    if (type === "primary") {
        return (
            <button
                onClick={onClick}
                type="button"
                className="text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg text-white bg-black transition-all duration-300 hover:bg-gradient-to-br from-yellow-500 to-lime-500 hover:text-white ease-out first:ml-0 hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl hover:shadow-yellow-500/50"
            >
                {children}
            </button>
        );
    }
    return (
        <button
            onClick={onClick}
            type="button"
            className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 bg-white hover:bg-gray-300 hover:scale-105 active:scale-100 tablet:first:ml-0 shadow-md hover:shadow-xl ${classes}`}
        >
            {children}
        </button>
    );
};

export default Button;
