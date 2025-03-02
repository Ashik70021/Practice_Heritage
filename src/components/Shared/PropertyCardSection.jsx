import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {properties.map((property) => (
                        <div key={property.id} className="mt-4 flex-shrink-0 w-full px-4">
                            <Link to={`/propertydetails/${property.id}`}>
                                <div className="bg-[#F9FAFB] rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative">
                                        <img src={property.images[0]} alt={property.name} className="w-full h-52 object-cover" />
                                        <div className="absolute bottom-2 left-3 bg-[#FDF0E7] flex gap-1 justify-center items-center rounded-md px-2 ">
                                            <p className='text-[#101010] text-xl font-semibold'>{property.images.length}</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className='flex justify-between'>
                                            <h3 className="text-md rounded-sm font-normal bg-[#C5E2FF] text-[#00254A] px-2">{property.type}</h3>
                                            <div className='flex gap-2 items-center'>
                                                <div className='bg-[#EE6611] w-3 h-3'></div>
                                                <h3>{property.transactiontype}</h3>
                                            </div>
                                        </div>
                                        <hr className='mt-2 mb-2' />
                                        <h2 className="text-xl font-semibold text-[#111827]">{property.name}</h2>
                                        <p className="text-gray-600 text-lg font-normal">{property.location}</p>
                                        <p className="mt-4 text-[#111827] text-2xl font-semibold">{property.amount}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyCardSection;