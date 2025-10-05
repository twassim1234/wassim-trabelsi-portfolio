const hobbies = [
    { name: "Traveling" },
    { name: "Cooking" },
    { name: "Multicultural Events" },
    { name: "Long Walks" },
    { name: "Music" },
    { name: "Hiking" },    
    { name: "Watching MotorSports" },


  ];
  
  export const Hobbies = () => {
    return (
      <section id="hobbies" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Hobbies</span> & <span className="text-primary">Interests</span>
          </h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-card py-6 px-4 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center"
              >
                <h4 className="font-semibold text-lg">{hobby.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  