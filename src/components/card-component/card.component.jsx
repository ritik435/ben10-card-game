import react from "react";
import './card.styles.css'


export const Card = (props) => {
    const { monster } = props
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}&size=180X180`} />
            <h1>{monster.name}</h1>
        </div>
    )
}