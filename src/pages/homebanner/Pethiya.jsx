import React from 'react'
import UrbanUserImage from '../../assets/urbanUser1.jpg';

function Pethiya() {
  return (
    <div className='w-full py-8 '>
    <div className='w-full h-400px flex items-start shadow-lg rounded-lg' style={{ border: '' }}>
    
    <div className="p-2 w-1/2 flex">
    <div className="w-1/2 rounded-l-lg overflow-hidden">
        <img
            src={UrbanUserImage}
            alt="Some descriptive text"
            className="w-full h-full object-cover"
        />
    </div>
    <div className="w-1/2 rounded-r-lg overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1623211265502-412854043d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Some descriptive text"
            className="w-full h-full object-cover"
        />
    </div>
</div>

        
        <div className="p-2 w-1/2 self-baseline">
        <h1 className="text-4xl font-bold mb-4">Pethiya Bazzar</h1>
        <div className="my-8 px-4">
            <p className="mb-4">
                At <span className="font-bold">Pethiya Bazzar</span>, we connect urban users with local farmers, offering a diverse range
                of essential grains and oils. Our E-commerce platform ensures timely delivery of fresh
                vegetables, fostering a direct impact on farming families. The <span className="font-bold">Jaykissan</span> app guarantees pure
                products sourced from nearby farmers practicing organic techniques, promoting better healthcare.
            </p>

            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc pl-6">
                    <li><span className="text-blue-500">Diverse Selection:</span> Grains (Wheat, Rice, Corn, Pulses) and Oils (Mustard, Soya, Sunflower).</li>
                    <li><span className="text-blue-500">Direct Connection:</span> Orders directly support local farmers, creating a meaningful impact.</li>
                    <li><span className="text-blue-500">Fresh Vegetables:</span> Timely deliveries of farm-fresh vegetables to your doorstep.</li>
                    <li><span className="text-blue-500">Transparency:</span> Showcase the direct impact of each purchase on farming families.</li>
                    <li><span className="text-blue-500">Quality Assurance:</span> Pure products sourced from nearby farmers using organic techniques.</li>
                </ul>
            </div>

            <p>
                Experience the convenience of <span className="font-bold">Pethiya Bazzar</span> - where every purchase promotes
                sustainable, organic farming practices.
            </p>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Pethiya
