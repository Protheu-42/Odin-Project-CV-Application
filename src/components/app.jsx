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
  const [academicFormations, setAcademicFormations] = useState({
    institution: "University of the Khan",
    courseTitle: "Greater Khan formation",
    ending: "doesn't matter",
  });

  function SubmitButton() {
    return <p>loading...</p>;
  }

  return (
    //Tudo abaixo tem que ser um if, e o else deve ser ativo pelo submit button
    <div className="input-display">
      <Contact contact={contact} onChangeHandler={contactUpdater} />
      <Objective goal={goal} onChangeHandler={objectiveUpdater} />
      <AcademicExp
        course={academicFormations}
        onChangeHandler={academicFormationUpdater}
      />
      <ProfissionalExp />
      <button onClick={SubmitButton}>Submit</button>
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

  function academicFormationUpdater(type, event) {
    switch (type) {
      case "institution":
        setAcademicFormations((prevFormation) => ({
          ...prevFormation,
          institution: event.target.value,
        }));
        break;

      case "courseTitle":
        setAcademicFormations((prevFormation) => ({
          ...prevFormation,
          courseTitle: event.target.value,
        }));
        break;

      case "ending":
        setAcademicFormations((prevFormation) => ({
          ...prevFormation,
          ending: event.target.value,
        }));
        break;
      default:
        break;
    }
  }
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

function AcademicExp({ course, onChangeHandler }) {
  return (
    <section>
      <h1>Formação</h1>
      <section className="input-section-courses">
        <label>
          Instituição
          <input
            type="text"
            value={course.institution}
            onChange={(event) => onChangeHandler("institution", event)}
          />
        </label>
        <label>
          Descrição da Formação
          <input
            type="text"
            value={course.courseTitle}
            onChange={(event) => onChangeHandler("courseTitle", event)}
          />
        </label>
        <label>
          Conclusão
          <input
            type="text"
            value={course.ending}
            onChange={(event) => onChangeHandler("ending", event)}
          />
        </label>
      </section>
    </section>
  );
}

function ProfissionalExp() {
  return (
    <section>
      <h1>Histórico Profissional</h1>
      <ul>
        <li className="input-section">
          <label>
            Nome da empresa
            <input type="text" id="place" />
          </label>
          <label>
            Quando entrou e quando saiu da empresa
            <input type="text" id="date" />
          </label>
          <label>
            Cargo
            <input type="text" id="position" />
          </label>
          <label>
            Atividades
            <textarea id="positionActivies" cols="30" rows="10"></textarea>
          </label>
        </li>
      </ul>
    </section>
  );
}
