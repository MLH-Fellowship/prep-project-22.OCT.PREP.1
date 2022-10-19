import SunriseImg from "../../assets/img/sunrise.png";

export default function Sunrise({sunrise, timezone}) {

    const sunTimestamp = sunrise + timezone;

    const formatTime = (time) => {
        const date = new Date(
            (time + new Date().getTimezoneOffset() * 60) * 1000
        );

        const hours = date.getHours();

        const minutes = "0" + date.getMinutes();

        const formattedTime = hours + ":" + minutes.substring(0,2);

        return formattedTime;
    }

    return <div className="">
        <img src={SunriseImg} alt="sunrise"/>
        <h2>Sunrise : {formatTime(sunTimestamp)}</h2>
    </div>
}