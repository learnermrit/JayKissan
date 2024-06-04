import React, { useState } from "react";

const SuggestForm = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation
    // After validation, you can send this data to your prediction model
    console.log(formData);
    // Call a function to send data to the prediction model
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Suggest Crop Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nitrogen" className="block font-bold mb-2">
            Nitrogen:
          </label>
          <input
            type="text"
            id="nitrogen"
            name="nitrogen"
            value={formData.nitrogen}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phosphorus" className="block font-bold mb-2">
            Phosphorus:
          </label>
          <input
            type="text"
            id="phosphorus"
            name="phosphorus"
            value={formData.phosphorus}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="potassium" className="block font-bold mb-2">
            Potassium:
          </label>
          <input
            type="text"
            id="potassium"
            name="potassium"
            value={formData.potassium}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="temperature" className="block font-bold mb-2">
            Temperature:
          </label>
          <input
            type="text"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="humidity" className="block font-bold mb-2">
            Humidity:
          </label>
          <input
            type="text"
            id="humidity"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ph" className="block font-bold mb-2">
            pH:
          </label>
          <input
            type="text"
            id="ph"
            name="ph"
            value={formData.ph}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rainfall" className="block font-bold mb-2">
            Rainfall:
          </label>
          <input
            type="text"
            id="rainfall"
            name="rainfall" 
            value={formData.rainfall}
            onChange={handleChange}
            className="border-gray-400 border-2 p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuggestForm;
