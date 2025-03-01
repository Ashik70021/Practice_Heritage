import { useEffect, useState } from "react";

const PropertyCardSection = () => {
    const [properties, setProperties] = useState([])
    console.log(properties)
    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])
    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Popular Properties</h1>
                <p className="text-lg font-semibold text-[#0059B1]">See all property</p>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default PropertyCardSection;