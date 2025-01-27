const Experience = () => {
  const Experience = [
    {
      title: "Eclipse Software FULL-STACK",
      date: "Jun. 2023 – Dic. 2023",
      technologies:
        " .NET, C#, SQL Server, API REST, HTML, CSS, React.js, TypeScript, Tailwind CSS",
      description:
        "I worked the migration of a desktop accounting system to a web-based platform, achieving 90% project completion. This involved restructuring complex modules and ensuring compliance with Costa Rican tax regulations. Using technologies like React.js, C#, .NET, and Tailwind CSS, I developed new features that enhanced the user interface and system performance. Additionally, I worked in an Agile team adopting Scrum, which enabled efficient development, and optimized the system by integrating new APIs and improving existing code, resulting in a 30% increase in efficiency and a reduction in errors.",
      position: "Internship contract",
    },
  ];

  const Experience2 = [
    {
      title: "Innova Sales FULL-STACK",
      date: "Dic. 2024 - Present",
      technologies:
        " .NET, C#, SQL Server, API REST, HTML, CSS, Razor, JavaScript",
      description:
        "Currently working on the migration and restructuring of a medical appointment platform, developing features such as appointment scheduling, online messaging, and doctor search. Implementing a REST API for video calls, digital prescriptions, and home visits, as well as redesigning the user interface and managing the database with SQL Server. Working in an agile team under Scrum methodology.",
      position: "Internship contract",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-white text-center mb-8">
        Experience
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative border-l border-gray-300 pl-8">
            {Experience.map((event, index) => (
              <div key={index} className="mb-8 flex flex-col space-y-2">
                <div className="absolute -left-4 bg-teal-600  h-8 w-8 rounded-full border-2 border-white"></div>
                <div className="text-white">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <h3 className="text-sm text-gray-500">
                    {event.technologies}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                  <h3 className="text-lg text-gray-400">{event.position}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="relative border-l border-gray-300 pl-8">
            {Experience2.map((event, index) => (
              <div key={index} className="mb-8 flex flex-col space-y-2">
                <div className="absolute -left-4 bg-[#e81cff] h-8 w-8 rounded-full border-2 border-white"></div>
                <div className="text-white">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <h3 className="text-sm text-gray-500">
                    {event.technologies}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                  <h3 className="text-lg text-gray-400">{event.position}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
