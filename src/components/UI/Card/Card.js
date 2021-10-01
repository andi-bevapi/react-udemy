import './Card.css';

const Card = (props) => {
    console.log("Card---",props);
    return(
        <div className={props.class}>
            {props.children}
        </div>
    )
}

export default Card;