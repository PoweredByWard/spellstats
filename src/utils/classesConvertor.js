import Conduit from "./../icons/Conduit.png";
import Frostborn from "./../icons/Frostborn.png";
import Pyromancer from "./../icons/Pyromancer.png";
import Stoneshaper from "./../icons/Stoneshaper.png";
import Tempes from "./../icons/Tempes.png";
import Toxicologist from "./../icons/Toxicologist.png";

export const getClass = (name) => {
    switch (name.toLowerCase()) {
        case "conduit":
            return Conduit;
        case "frostborn":
            return Frostborn;
        case "pyromancer":
            return Pyromancer;
        case "tempes":
            return Tempes;
        case "stoneshaper":
            return Stoneshaper;
        case "toxicologist":
            return Toxicologist;

        default:
            //throw new Error("Invalid player class, please contact the developer.");
    }
}
