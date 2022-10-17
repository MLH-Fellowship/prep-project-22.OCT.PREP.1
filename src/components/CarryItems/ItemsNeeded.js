import "../../assets/styles/ItemsNeeded.css";
import Mask from "../../assets/img/mask.png";
import Cap from "../../assets/img/cap.png";
import Watch from "../../assets/img/watch.png";
import WaterProofBoots from "../../assets/img/water_proof_boots.png";
import Jacket from "../../assets/img/jacket.png";
import Gloves from "../../assets/img/gloves.png";
import SunCream from "../../assets/img/suncream.png";
import FlashLight from "../../assets/img/flashlight.png";
import Umbrella from "../../assets/img/umbrella.png";
import Scarf from "../../assets/img/scarf.png";
import SunGlasses from "../../assets/img/sunglasses.png";
import Goggles from "../../assets/img/goggles.png";
import RainCoat from "../../assets/img/raincoat.png";

const ItemsNeeded = ({ weatherKind }) => {
  const getCarryItems = x => {
    if (x === "Rain") return [RainCoat, Umbrella, WaterProofBoots];
    if (x === "Snow") return [SunGlasses, Scarf, Jacket, Gloves];
    if (x === "Clear") return [Cap, SunCream, SunGlasses];
    if (x === "Clouds") return [Watch, Cap];
    if (x === "Tornado") return [FlashLight, Goggles];
    if (x === "Drizzle") return [Umbrella, WaterProofBoots, RainCoat];
    if (x === "Thunderstorm") return [FlashLight, WaterProofBoots, RainCoat];
    if (x === "Mist") return [Goggles, Mask, Watch];
    if (x === "Squall") return [FlashLight, WaterProofBoots, RainCoat, Goggles];
    if (x === "Dust") return [FlashLight, Goggles];
    if (x === "Ash") return [Goggles, Mask, Gloves];
    if (x === "Sand") return [FlashLight, Goggles, Mask, Gloves];
    if (x === "Fog") return [FlashLight, Goggles];
    if (x === "Smoke") return [Goggles, Mask];
    if (x === "Haze") return [Goggles, Mask];
    else return undefined;
  };

  return (
    <div className="items-outer-container">
      <h3>Carry the below items!</h3>
      <div className="items-inner-container">
        {getCarryItems(weatherKind) === undefined ? (
          <alert>Error: You have entered wrong location!</alert>
        ) : (
          getCarryItems(weatherKind).map((ele, index) => {
            return (
              <div key={index} className="items-card">
                <img src={ele} alt="required item" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ItemsNeeded;
