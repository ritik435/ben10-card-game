import react from "react";
import './card-list.styles.css';
import { Card } from "./card-component/card.component";


export const CardList = (props) => {
    const { monsters } = props
    return (
        <div className="card-list" >
            {monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}