import { useNavigate, useParams } from "react-router-dom"
import { data } from "../data";

export const Destinations = () => {
    const { continent, country } = useParams();
    const navigate = useNavigate();
  
    console.log(continent , country)
    const requiredCountry = data.continents.find(item => item.name === continent).countries.find(item => item.name === country)
    console.log(requiredCountry)
    

    return (
        <div>
            <h1>Destinations</h1>
            {
                       requiredCountry.destinations.map(item => (
                       // <div key={item.id} onClick={() => navigate(`./${item.name}`)}>{item.name}</div>
                       <div  key={item.id} onClick={() => navigate(`./${item.name}`)} className="card">
                        <img src={item.image} alt="" />
                        <div className="card-info">
                          <span className="country-name">{item.name}</span>
                          <span className="destination-icon">&#x2708;</span>
                        </div>
                      </div>
                    ))
                }
        </div>
    )
}