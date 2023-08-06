import { useParams } from "react-router-dom"
import { data } from "../data";

export const SindleDestination = () => {
    const { continent, country, destination } = useParams();
    console.log(continent, country, destination);
    const requiredDestination = data.continents.find(item => item.name === continent).countries.find(item => item.name === country).destinations.find(item => item.name === destination)
    console.log(requiredDestination)
    
    return (
        <div>
            <h1>SingleDestination</h1>
        </div>
    )
}