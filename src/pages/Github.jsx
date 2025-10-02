export default function Github() {
  const projects = [
    {
      name: "🌑 Moon Facts",
      link: "https://github.com/Parmida98/Uppgift_React.git",
      desc: "En uppgift i React med komponenter och routing."
    },
    {
      name: "🃏 Blackjack",
      link: "https://github.com/isabellaTroncoso/Par_programmering_1-2.git",
      desc: "Par programmering där vi skapade blackjack spel"
    },
    {
      name: "☁️ Weather App",
      link: "https://github.com/Parmida98/WeatherApp.git", 
      desc: "En app som visar väderprognoser via en API."
    },
    {
      name: "🎞️ Marvel filmer ",
      link: "https://github.com/Elie0825/Grupp-5-Agila-projektet-.git", 
      desc: "En app som visar film uppgifter om marvel världen via en API."
    }
  ];

  return (
    <section className="p-6">
      <h1 className="text-center text-3xl font-bold mb-6">Mina GitHub-projekt</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-center bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-500"
            >
              Visa på GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
