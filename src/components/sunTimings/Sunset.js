import SunsetImg from "../../assets/img/sunset.png";

export default function Sunset({ sunset, timezone }) {

    const sunTimestamp = sunset+ timezone;

    const formatTime = (time) => {
        const date = new Date(
            (time + new Date().getTimezoneOffset() * 60) * 1000
        );

        const hours = date.getHours();

        const minutes = "0" + date.getMinutes();

        const formattedTime = hours + ":" + minutes.substring(0, 2);

        return formattedTime;
    }

    return <div className="">
        <img src={SunsetImg} alt="sunset"/>
        <h2>Sunset : {formatTime(sunTimestamp)}</h2>
    </div>
}