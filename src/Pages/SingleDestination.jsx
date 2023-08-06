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
            <div className="destination-card">
      <img src={requiredDestination.image} alt=" " />
      <div className="destination-card-info">
        <span className="destination-country-name">{requiredDestination.name}</span>
        <span className="destination-destination-icon">&#x2708;</span>
      </div>
      <div className="destination-attraction-details">
        <p className="destination-attraction-description">{requiredDestination.description}</p>
        <div className="destination-attraction-info">
          <p>Location: {requiredDestination.location}</p>
          <p>Opening Hours: {requiredDestination.openingHours}</p>
          <p>Ticket Price: {requiredDestination.ticketPrice}</p>
        </div>
        <div className="destination-attraction-reviews">
          <span className="destination-attraction-rating">{requiredDestination.ratings}</span>
          <span>{requiredDestination.reviews} reviews</span>
        </div>
        <a className="destination-attraction-website" href={requiredDestination.website} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
        </div>
        </div>
    )
}