import React from "react";

function KisaanServices() {
  return (
    <div className="w-full h-400px  flex items-start shadow-lg rounded-lg">
      <div className="w-1/2 p-2">
        <h1 className="text-4xl font-bold mb-4">Kissan Services</h1>
        <div>
          <h2 className="text-1xl font-bold mb-4">
            At Kissan, we offer a variety of services to support farmers and
            enhance agricultural practices.
          </h2>
          <div className="mb-4" style={{ border: "", textAlign: "left" }}>
            <p className="list-disc ">Field Ploughing - Tractors Booking</p>
            <p className="list-disc ">Vermicompost Delivery</p>
            <p className="list-disc ">Seed Supply</p>
            <p className="list-disc ">Threshing Services</p>
            <p className="list-disc ">Sand Delivery - Fast and Best</p>
          </div>
          <p>
            Our dedicated team is committed to delivering high-quality services
            to meet the needs of our agricultural community.
          </p>
        </div>
      </div>

      <div className="w-1/2 p-2 flex">
        <div className=" rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Some descriptive text"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default KisaanServices;
