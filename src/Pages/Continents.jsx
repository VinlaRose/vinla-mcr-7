
import { useNavigate } from "react-router-dom"
import { data } from "../data"


export const Continents = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Continents</h1>
            <div className="list">
                {
                    data.continents.map(item => (
                        <div key={item.id} onClick={() => navigate(`/${item.name}`)}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}