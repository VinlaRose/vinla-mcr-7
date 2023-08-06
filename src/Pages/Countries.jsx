import { useNavigate, useParams } from "react-router-dom"
import { data } from "../data";

export const Countries = () => {
    const {continent} = useParams();
    const navigate = useNavigate();
    console.log(continent)
    const requiredContinent = data.continents.find(item => item.name === continent);
    


    return (
        <div>
            <h1>Countries</h1>
            <div className="list">
                {
                       requiredContinent.countries.map(item => (
                        //<div key={item.id} onClick={() => navigate(`./${item.name}`)}>{item.name}</div>
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
        </div>
    )
}