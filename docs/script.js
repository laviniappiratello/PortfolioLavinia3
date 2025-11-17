const { useState } = React;

const App = () => {
  const certificates = [
      {
        title: "Artificial Intelligence Fundamentals",
        institution: "IBM",
        date: "jun/2024",
          image: "assets/ibm.jfif"
      },
      {
        title: "Backend Jr.",
        institution: "Rocketseat",
        date: "ago/2024",
          image: "assets/backendjr.jfif"
      },
      {
        title: "Introduction to Programming Using JavaScript",
        institution: "Rocketseat",
        date: "jul/2024",
          image: "assets/js.jfif"
      },
      {
        title: "Direito Autoral, Crimes Cibernéticos e Tributos Aplicados a Eventos",
        institution: "Governo Federal",
        date: "2023",
        image: "assets/crimescyber.jfif"
      },
      {
        title: "Projeto de Sistemas Web",
        institution: "Governo Federal",
        date: "jun/2024",
          image: "assets/web.jfif"
      }
    ];

  const projects = [
    {
      name: "Byte_Team - Vereadores API",
      tech: ["Node.js", "Express", "MySQL"],
      repo: "https://github.com/laviniappiratello/Byte_Team-API-1-",
      description: "Website para leitura e armazenamento de dados referentes aos vereadores de São José dos Campos disponibilizados na Câmara sem papel. Objetivo: aprimorar a visualização das informações, tornando-as mais acessíveis e transparentes para os eleitores, facilitando o acesso e o entendimento dos dados legislativos."
    },
    {
      name: "Helpnei - Dashboard & Plataforma",
      tech: ["Node.js", "React", "Dashboard"],
      repo: "https://github.com/laviniappiratello/API-2DSM",
      description: "Helpnei é uma plataforma para profissionais de venda direta, com gestão de links de afiliados, criação de lojas e vendas em comunidades. Desenvolvi um Dashboard de Indicadores de Crescimento para empresas parceiras e um sistema de cadastramento de usuários para redirecionamento a empresas compatíveis."
    },
    {
      name: "GeneSys - Gerenciador de Tarefas (API)",
      tech: ["Java", "Spring Boot", "Scrum Master"],
      repo: "https://github.com/GeneSys-fatec/API-3DSM",
      description: "Gerenciador de tarefas voltado para melhorar comunicação e entregas na empresa GSW. Baseado em SCRUM e CDIO, o projeto entrega um MVP funcional com criação/edição/exclusão de tarefas, atribuição a usuários, upload de anexos e colaboração em equipe com atualizações em tempo real."
    }
  ];

  return React.createElement("div", { className: "min-h-screen" },

    React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-12 space-y-16" },

      React.createElement("header", { className: "text-center space-y-6" },
        React.createElement("div", { className: "flex justify-center mb-6" },
              React.createElement("img", {
                src: "assets/lavinia.jpg",
                alt: "Lavínia",
                className: "profile-img float-animation"
              })
        ),
        React.createElement("h1", { className: "text-5xl md:text-6xl font-bold" },
          "Olá, sou a ",
          React.createElement("span", {
            style: {
              background: "linear-gradient(135deg, #667eea 0%, #a5b4fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }
          }, "Lavínia")
        ),
        React.createElement("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto" },
          "Desenvolvedora Fullstack apaixonada por inovação. Gosto de construir projetos que unem criatividade e tecnologia."
        ),
        React.createElement("div", { className: "flex justify-center gap-4 flex-wrap" },
          React.createElement("span", { className: "badge" }, "Fullstack Developer"),
          React.createElement("span", { className: "badge" }, "Open to Work"),
          React.createElement("span", { className: "badge" }, "São José dos Campos")
        )
      ),

      React.createElement("section", { className: "grid md:grid-cols-3 gap-6" },
        React.createElement("div", { className: "glass rounded-2xl stats-card" },
          React.createElement("div", { className: "stats-number" }, "19"),
          React.createElement("div", { className: "stats-label" }, "Anos de idade")
        ),
        React.createElement("div", { className: "glass rounded-2xl stats-card" },
          React.createElement("div", { className: "stats-number" }, "18+"),
          React.createElement("div", { className: "stats-label" }, "Tecnologias")
        ),
        React.createElement("div", { className: "glass rounded-2xl stats-card" },
          React.createElement("div", { className: "stats-number" }, "3+"),
          React.createElement("div", { className: "stats-label" }, "Projetos Completos")
        )
      ),

      React.createElement("section", { className: "glass p-8 rounded-2xl" },
        React.createElement("h2", { className: "section-title" }, "Sobre mim"),
        React.createElement("p", { className: "text-gray-300 leading-relaxed text-lg" },
          "Tenho 19 anos e estudo Desenvolvimento de Software Multiplataforma na Fatec São José dos Campos. ",
          "Sou apaixonada por desenvolvimento web, backend e arquitetura de sistemas escaláveis. ",
          "Adoro aprender novas tecnologias e aplicá-las em projetos reais que façam diferença. ",
          "Meu foco está em criar soluções completas, do frontend, backend, ao banco de dados, sempre buscando código limpo e boas práticas."
        )
      ),

      React.createElement("section", null,
        React.createElement("h2", { className: "section-title" }, "Projetos em Destaque"),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
          projects.map((project, idx) =>
            React.createElement("div", {
              key: idx,
              className: "glass rounded-2xl p-6 project-card"
            },
              React.createElement("h3", { className: "text-xl font-semibold mb-3 flex items-center justify-between" },
                React.createElement("span", null, project.name),
                project.roleBadge ? React.createElement("span", { className: "badge", style: { fontSize: '12px', padding: '6px 10px' } }, project.roleBadge) : null
              ),
              project.image ? React.createElement("img", { src: project.image, alt: project.name, className: "project-img" }) : null,
              React.createElement("p", { className: "text-gray-400 text-sm mb-4" }, project.description),
              React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" },
                project.tech.map(t =>
                  React.createElement("span", {
                    key: t,
                    className: "text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                  }, t)
                )
              ),
              React.createElement("div", { className: "project-overlay" },
                React.createElement("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
                  React.createElement("a", { href: project.repo || '#', target: "_blank", rel: "noopener noreferrer", className: "text-white font-semibold contact-link", style: { padding: '8px 12px', borderRadius: '8px' } }, "Repositório")
                )
              )
            )
          )
        )
      ),

      React.createElement("section", { className: "glass p-8 rounded-2xl" },
        React.createElement("h2", { className: "section-title" }, "Stack Tecnológico"),
        React.createElement("div", { className: "space-y-6" },
          React.createElement("div", null,
            React.createElement("h3", { className: "text-lg font-semibold mb-3 text-gray-300" }, "Frontend"),
            React.createElement("div", { className: "flex flex-wrap gap-2" },
              ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Sass"].map(t =>
                React.createElement("span", { key: t, className: "badge" }, t)
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h3", { className: "text-lg font-semibold mb-3 text-gray-300" }, "Backend"),
            React.createElement("div", { className: "flex flex-wrap gap-2" },
              ["Node.js", "Spring Boot", "Python", "Java", "JWT", "REST APIs"].map(t =>
                React.createElement("span", { key: t, className: "badge" }, t)
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h3", { className: "text-lg font-semibold mb-3 text-gray-300" }, "Database & Cloud"),
            React.createElement("div", { className: "flex flex-wrap gap-2" },
              ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Cassandra", "AWS", "Docker"].map(t =>
                React.createElement("span", { key: t, className: "badge" }, t)
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h3", { className: "text-lg font-semibold mb-3 text-gray-300" }, "Ferramentas"),
            React.createElement("div", { className: "flex flex-wrap gap-2" },
              ["Git", "GitHub", "VS Code", "Postman", "Figma"].map(t =>
                React.createElement("span", { key: t, className: "badge" }, t)
              )
            )
          )
        )
      ),

      React.createElement("section", null,
        React.createElement("h2", { className: "section-title" }, "Certificações"),
        React.createElement("div", { className: "carousel" },
          certificates.map((cert, idx) =>
            React.createElement("div", { key: idx, className: "carousel-item" },
              React.createElement("img", { src: cert.image || 'assets/web.jfif', alt: cert.title, className: "cert-img" }),
              React.createElement("h3", { className: "text-lg font-semibold mb-2" }, cert.title),
              React.createElement("p", { className: "text-purple-300 text-sm mb-2" }, cert.institution),
              React.createElement("p", { className: "text-gray-400 text-sm mb-3" }, cert.date),
              React.createElement("p", { className: "text-gray-300 text-sm" }, cert.description)
            )
          )
        ),
        React.createElement("p", { className: "text-center text-gray-400 text-sm mt-2" },
          "← Arraste para ver mais →"
        )
      ),

      React.createElement("section", { className: "glass p-8 rounded-2xl" },
        React.createElement("h2", { className: "section-title" }, "Formação Acadêmica"),
        React.createElement("div", { className: "timeline-item" },
          React.createElement("h3", { className: "text-xl font-semibold mb-1" },
            "Desenvolvimento de Software Multiplataforma"
          ),
          React.createElement("p", { className: "text-purple-300 mb-2" }, "Fatec São José dos Campos"),
          React.createElement("p", { className: "text-gray-400 text-sm" }, "2024 - Atual")
        )
      ),

      React.createElement("section", { className: "glass p-8 rounded-2xl" },
        React.createElement("h2", { className: "section-title" }, "Vamos Conversar?"),
        React.createElement("p", { className: "text-gray-300 mb-6" },
          "Estou sempre aberta a novos projetos, colaborações e oportunidades. Entre em contato!"
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("a", {
            href: "mailto:laviniappiratello@gmail.com",
            className: "contact-link"
          },
            React.createElement("span", null, "📧"),
            React.createElement("div", null,
              React.createElement("div", { className: "font-semibold" }, "Email"),
              React.createElement("div", { className: "text-sm text-gray-400" }, "laviniappiratello@gmail.com")
            )
          ),
          React.createElement("a", {
            href: "https://www.linkedin.com/in/lavinia-piratello-6a82101b1/?isSelfProfile=true",
            target: "_blank",
            className: "contact-link"
          },
            React.createElement("span", null, "💼"),
            React.createElement("div", null,
              React.createElement("div", { className: "font-semibold" }, "LinkedIn"),
              React.createElement("div", { className: "text-sm text-gray-400" }, "/in/laviniappiratello")
            )
          )
        )
      ),

      React.createElement("footer", { className: "text-center text-gray-400 py-8" },
        React.createElement("p", null, "© 2024 Lavínia. Desenvolvido com React, JavaScript e Tailwind CSS"),
        React.createElement("p", { className: "text-sm mt-2" }, "São José dos Campos")
      )
    ),
    
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
