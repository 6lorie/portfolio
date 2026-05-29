import React from "react";
import "../css/Button.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "ghost";
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary"
}) => {
    return (
        <button className={`btn ${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;