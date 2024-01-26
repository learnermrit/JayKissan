import React from 'react'

function BookMyTree() {
  return (
    <div className="w-full py-8 ">
    <div
      className="w-full h-400px flex items-start shadow-lg rounded-lg"
      style={{ border: "" }}
    >
      <div className="p-2 w-1/2 flex">

          
        <div className='w-1/2 rounded-l-lg overflow-hidden'>
          <img
            src="https://images.pexels.com/photos/5528993/pexels-photo-5528993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Some descriptive text"
            className="w-full h-full object-cover"
          />
        </div>
        <div className='w-1/2 rounded-r-lg overflow-hidden'>
          <img
            src="https://cdn.pixabay.com/photo/2016/01/02/02/03/oranges-1117644_1280.jpg"
            alt="Some descriptive text"
            className="w-full h-full object-cover"
          />
          </div>
        
      </div>

      <div className="p-2 w-1/2 self-baseline">
        <h1 className="text-4xl font-bold mb-4">Book My Tree</h1>
        <div className="my-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">BookMyTree: Harvest Joy with a Click</h2>

            <p className="mb-4 text-lg">
                Discover the magic of <span className="text-green-500 font-bold">BookMyTree</span>, where you can reserve a tree near your location during the enchanting fruit seasons. It's not just a booking; it's an invitation to experience the joy of nature with your family.
            </p>

            

            <p className="mb-4 text-lg">
                But that's not all – <span className="text-green-500 font-bold">BookMyTree</span> goes beyond personal enjoyment. Any surplus fruits can be donated to local farmers, contributing to their livelihood and fostering community connections. Additionally, you have the option to parcel the extra fruits, spreading the joy to your loved ones.
            </p>

            <p className="mb-4 text-lg">
                By booking a tree, you play a crucial role in <span className="text-green-500 font-bold">supporting farmers</span> directly. It's a unique initiative that not only brings joy to your doorstep but also nurtures the roots of our communities.
            </p>

            <p className="text-lg">
                Experience the richness of nature, contribute to local farming, and make every fruit season memorable with <span className="text-green-500 font-bold">BookMyTree</span>.
            </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookMyTree
