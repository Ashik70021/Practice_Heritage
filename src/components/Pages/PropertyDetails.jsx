import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('/properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])
    const { id } = useParams();
    console.log(id)
    console.log(properties)
    
    const property = properties.find(property =>property.id == id)
    console.log(property)

    return (
        <div>
            det
        </div>
    );
};

export default PropertyDetails;