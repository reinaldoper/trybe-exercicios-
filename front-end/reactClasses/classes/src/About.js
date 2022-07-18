import React from "react";

class About extends React.Component {
    render() {const skills = ["HTML", "javaScript", "CSS", "Git", "HOF"] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

      return (
        <div>
            <h1>Reinaldo</h1>
              <p>Meu nome é Reinaldo, sou uma pessoa tranquila!</p>
              <h2>Minhas habiliaddes!</h2>
              <ul className="ul">
                  {jsxSkills }
              </ul>
        </div>
      )
    }
  }
export default About;