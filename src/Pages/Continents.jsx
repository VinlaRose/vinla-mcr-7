
import { useNavigate } from "react-router-dom"
import { data } from "../data"
import "./Pages.css"


export const Continents = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Continents</h1>
            <div className="list">
                {
                    data.continents.map(item => (
                       // <div key={item.id} onClick={() => navigate(`/${item.name}`)}>{item.name}</div>
                        <div  key={item.id} onClick={() => navigate(`/${item.name}`)} className="card">
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