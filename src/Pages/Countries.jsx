import { useParams } from "react-router-dom"
import { data } from "../data";

export const Countries = () => {
    const {continent} = useParams();
    const requiredContinent = data.continents.find(item => item.name === continent);
    console.log(requiredContinent)
    return (
        <div>
            <h1>Countries</h1>
        </div>
    )
}