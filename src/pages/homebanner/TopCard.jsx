import React from "react";

function TopCard() {
  return (
    <div className="w-full py-8 ">
      <div
        className="w-full h-400px flex items-start shadow-lg rounded-lg"
        style={{ border: "" }}
      >
        <div className="p-2 w-1/2 flex">
          <div className=" w-1/2 rounded-l-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/13315962/pexels-photo-13315962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Some descriptive text"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-1/2 rounded-r-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/860577/pexels-photo-860577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Some descriptive text"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-2 w-1/2 self-baseline">
          <h1 className="text-4xl font-bold mb-4">Jay Jawan Jay Kissan</h1>
          <p>
            Jay Jawan Jay Kissan (English:{" "}
            <span className="italic">"Hail the Soldier, Hail the Farmer"</span>)
            was a slogan of <span className="text-blue-500 font-bold">Lal Bahadur Shastri</span>, the second Prime Minister of
            India spoken in 1965 at a public gathering Uruwa, Prayagraj. Soon
            after Shastri took over the prime ministership of India after
            Nehru's death, India was <span className="text-red-500 font-bold">attacked by Pakistan</span>. At the same time,
            there was a <span className="text-red-500 font-bold">scarcity of food grains</span> in the country. Shastri gave the
            slogan <span className="font-bold text-green-500">Jay Jawan Jay Kissan</span> to
            enthuse the soldiers to defend India and simultaneously <span className="font-bold text-green-500">cheering
            farmers</span> to do their best to increase the production of food grains
            to reduce dependence on imports. It became a very popular slogan.
            <br />
            <br />
            However, the <span className="text-black-500 font-bold">difference in facilities for jawans and farmers in
            India is notable.</span> Jawans are provided with a range of facilities
            including Army School, Canteen Card, Job Portals, Bal Bhawan, Bal
            Sadan, Housing, Clothes, Food, Medical Facilities, Allowance,
            Entertainment (Park, Cinema Hall, Sports Complex), Library,
            Traveling, Better Future of Children, Pension, Toll Tax Relaxation,
            and Family Security.
            <br />
            <br />
            On the other hand, facilities for farmers include Government School,
            Ration Card, Subsidy, and support for agricultural practices (Khet).
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopCard;
