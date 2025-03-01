import LandingBaner from "../Banner/LandingBaner";
import PropertyCardSection from "../Shared/PropertyCardSection";

const Landing = () => {
    return (
        <div>
            <LandingBaner></LandingBaner>
            <PropertyCardSection heading={"Popular Properties"}></PropertyCardSection>
        </div>
    );
};

export default Landing;