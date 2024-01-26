import React from "react";
import  { useState,useEffect} from "react";

const CropSuggestion = () => {

    const [mapReady, setMapReady] = useState(false);

  // Simulate delay for loading Google Maps (replace this with your actual Google Maps loading logic)
//   const handleMapLoad = () => {
//     setMapReady(true);
//   };
useEffect(() => {
    const delay = setTimeout(() => {
      setMapReady(true);
    }, 6000); // Simulating a 3-second delay for loading Google Maps

    return () => clearTimeout(delay); // Clear the timeout on component unmount
  }, []);

  return (
    <div className="w-full h-400px  flex items-start shadow-lg rounded-lg">
      <div className="my-8 px-4 w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Location-Based Crop Suggestion
        </h2>

        <p className="mb-4">
          Elevate your farming experience with our{" "}
          <span className="text-indigo-500 font-bold">
            Location-Based Crop Suggestion
          </span>{" "}
          feature. By leveraging the{" "}
          <span className="text-indigo-500 font-bold">
            power of Machine Learning and analyzing
          </span>{" "}
          the unique combination of a farmer's location and soil details, we
          provide tailored recommendations for the best quality seeds and
          optimal crops.
        </p>

        <p className="mb-4">
          Our technology takes into account the specific needs of each farmer,
          maximizing benefits and increasing yield. By considering local demand,
          we ensure that the suggested crops align with market trends, giving
          farmers a strategic advantage in their agricultural endeavors.
        </p>

        <p>
          Experience precision farming like never before. Let our{" "}
          <span className="text-indigo-500 font-bold">Crop Suggestion</span>{" "}
          feature guide you towards enhanced productivity and greater success in
          your agricultural journey.
        </p>

        <div className="mt-20">
          <p>
            Under the Supervision of{" "}
            <a
              href="https://www.nitjsr.ac.in/people/profile/CA103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold"
            >
              Dr Chandrashekhar Azad
            </a>
          </p>
        </div>
      </div>

      <div className="w-1/2  overflow-hidden rounded-lg">
       {mapReady?( <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3406.484617169786!2d85.47834017519413!3d26.072515027158023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSutihara%20Aima%20prem%20mangoes!5e1!3m2!1sen!2snl!4v1706265532609!5m2!1sen!2snl"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
            // onLoad={handleMapLoad}
          ></iframe>
        </div>):(
             <img
             src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="Map Placeholder"
             style={{ width: "100%", height: "100%", objectFit: "cover" }}
           />
        )}
      </div>
    </div>
  );
};

export default CropSuggestion;
