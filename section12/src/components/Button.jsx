import "./Button.css";

const Button = ({ text, type, onClick }) =>
{
    return (
                                                // type에 따라 변경될 수 있도록.
        <button onClick={onClick} className={`Button Button_${type}`}>
                            {/* <button class="Button Button_red"></button> */}
            {text}
        </button>
    );
};
export default Button;
