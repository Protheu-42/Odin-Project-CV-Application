import { useState } from "react";
import "../input.css";

export function App() {
  const [contact, setContact] = useState({
    name: "Temujin",
    address: "Mongolia",
    email: "sejanossotributario@mongolempire.com",
    telephone: "555-pay-your-tribute-555",
  });
  const [goal, setGoal] = useState(
    "Raze your lands, take your money, conquer your castle and leave on banner on the place"
  );
  const [academicFormations, setAcademicFormations] = useState([
    {
      index: 0,
      institution: "University of the Khan",
      courseTitle: "Greater Khan formation",
      ending: "doesn't matter",
    },
  ]);

  return (
    <div className="input-display">
      <Contact contact={contact} onChangeHandler={contactUpdater} />
      <Objective goal={goal} onChangeHandler={objectiveUpdater} />
      <AcademicExp courses={academicFormations} />
      <ProfissionalExp />
      <SubmitButton />
    </div>
  );

  function contactUpdater(type, event) {
    switch (type) {
      case "name":
        setContact((prevContact) => ({
          ...prevContact,
          name: event.target.value,
        }));
        break;

      case "address":
        setContact((prevContact) => ({
          ...prevContact,
          address: event.target.value,
        }));
        break;

      case "email":
        setContact((prevContact) => ({
          ...prevContact,
          email: event.target.value,
        }));
        break;

      case "telephone":
        setContact((prevContact) => ({
          ...prevContact,
          telephone: event.target.value,
        }));
        break;

      default:
        break;
    }
  }

  function objectiveUpdater(event) {
    setGoal(event.target.value);
  }

  function academicFormationUpdater(index, event) {}
}

function Contact({ contact, onChangeHandler }) {
  return (
    <section className="input-section-contact">
      <h1>Informações de contato</h1>
      <label>
        Nome:
        <input
          value={contact.name}
          onChange={(event) => onChangeHandler("name", event)}
        />
        <p>{contact.name}</p>
      </label>

      <label>
        Endereço
        <input
          value={contact.address}
          onChange={(event) => onChangeHandler("address", event)}
        />
        <p>{contact.address}</p>
      </label>

      <label>
        Email
        <input
          type="email"
          value={contact.email}
          onChange={(event) => onChangeHandler("email", event)}
        />
        <p>{contact.email}</p>
      </label>

      <label>
        Telefone
        <input
          type="tel"
          value={contact.telephone}
          onChange={(event) => onChangeHandler("telephone", event)}
        />
        <p>{contact.telephone}</p>
      </label>
    </section>
  );
}

function Objective({ goal, onChangeHandler }) {
  return (
    <section>
      <h1>
        <label htmlFor="objective">Objetivo</label>
      </h1>
      <p>{goal}</p>
      <textarea
        id="objective"
        cols="90"
        rows="10"
        value={goal}
        onChange={onChangeHandler}
      ></textarea>
    </section>
  );
}

/* function AcademicExp() {
  return (
    <section>
      <h1>Formação</h1>
      <section className="input-section">
        <label htmlFor="institution">Insituição</label>
        <input type="text" id="institution" />
        <label htmlFor="course">Descrição da Formação</label>
        <input type="text" id="course" />
        <label htmlFor="conclusion">Conclusão</label>
        <input type="text" id="conclusion" />
        <button>Delete</button>
      </section>
      <button>Add new course</button>
    </section>
  );
} */

function AcademicExp({ courses }) {
  // Preciso arranjar uma forma de o onChange conseguir filtrar o elemento certo na array para atualiza-lo
  const test = courses.filter((course) => course.index === 0);

  return (
    <section>
      <h1>Formação</h1>
      {courses.map((course) => {
        return (
          <section key={course.index} className="input-section-courses">
            <label>
              Instituição
              <input type="text" value={course.institution} />
            </label>
            <label>
              Descrição da Formação
              <input type="text" value={course.courseTitle} />
            </label>
            <label>
              Conclusão
              <input type="text" value={course.ending} />
            </label>
          </section>
        );
      })}
    </section>
  );
}

function ProfissionalExp() {
  return (
    <section>
      <h1>Histórico Profissional</h1>
      <ul>
        <li className="input-section">
          <label htmlFor="place1">Nome da empresa</label>
          <input type="text" id="place1" />
          <label htmlFor="date1">Quando entrou e quando saiu da empresa</label>
          <input type="text" id="date1" />
          <label htmlFor="position1">Cargo</label>
          <input type="text" id="position1" />
          <label htmlFor="postionActivities1">Atividades</label>
          <textarea id="positionActivies1" cols="30" rows="10"></textarea>
        </li>
      </ul>
    </section>
  );
}

function SubmitButton() {
  return <button>Submit</button>;
}
