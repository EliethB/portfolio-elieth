const Education = () => {
  const degreeEvents = [
    {
      title: "Bachelor's Degree in Business Informatics",
      institution: "University of Costa Rica (UCR)",
      description:
        "I am currently a graduate of the Business Informatics program, where I had the opportunity to learn various specializations, such as software development, networking, and business management.",
      date: "Oct 2022 - Sep 2026",
    },
  ];

  const certificationEvents = [
    {
      title: "Scrum Foundation Professional Certificate SFPC",
      institution: "Certiprof",
      description:
        "The Scrum Foundation Professional Certificate (SFPC) from CertiProf validates fundamental knowledge of Scrum, including its roles, events, and artifacts.",
      date: "Jun 2023",
    },
    {
      title: "Back End Development and APIs",
      institution: "FreeCodeCamp",
      description:
        "The course teaches how to create servers, manage databases, and work with APIs using Node.js, Express, and MongoDB, covering key aspects of back-end development.",
      date: "Oct 2024",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-white text-center mb-8">
        Education
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-white text-left mb-4">
            Degrees
          </h2>
          <div className="relative border-l border-gray-300 pl-8">
            {degreeEvents.map((event, index) => (
              <div key={index} className="mb-8 flex flex-col space-y-2">
                <div className="absolute -left-4 bg-teal-600  h-8 w-8 rounded-full border-2 border-white"></div>
                <div className="text-white">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <h3 className="text-lg text-gray-400">{event.institution}</h3>
                  <p className="text-gray-300">{event.description}</p>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white text-left mb-4">
            Certifications
          </h2>
          <div className="relative border-l border-gray-300 pl-8">
            {certificationEvents.map((event, index) => (
              <div key={index} className="mb-8 flex flex-col space-y-2">
                <div className="absolute -left-4 bg-[#e81cff] h-8 w-8 rounded-full border-2 border-white"></div>
                <div className="text-white">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <h3 className="text-lg text-gray-400">{event.institution}</h3>
                  <p className="text-gray-300">{event.description}</p>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
