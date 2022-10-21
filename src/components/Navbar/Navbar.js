import "../../assets/styles/NavBar.css";
import Scrollspy from 'react-scrollspy'

const NavBar= () =>{
    return <>

<div className="wrapper">
    <Scrollspy
    className="links"
    items={ ['searchLocation', 'displayResults', 'explorePlaces', 'hourlyForecast'] }
    currentClassName="nav-active" >
        <a href="#searchLocation">Pick Location</a>
        <a href="#displayResults">Display Weather</a>
        <a href="#explorePlaces">Explore Places Nearby</a>
        <a href="#hourlyForecast">Hourly Forecast</a>
    </Scrollspy>
</div>

</>
}


export default NavBar;