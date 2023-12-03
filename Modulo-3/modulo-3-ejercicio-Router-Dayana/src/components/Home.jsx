import { Link } from "react-router-dom";
const Home = ({ data }) => {
    return <ul>
        {data.map((oneElement) =>
            <li key={oneElement.id} >
                <Link to={`/detail/${oneElement.id}`} className="enlace">
                    {oneElement.title}
                </Link>
            </li>)}
    </ul>
}
export default Home;