import { useState } from "react";
import "../input.css";
import "../cv.css";

export function App() {
  const [display, setDisplayMode] = useState("input");
  const [contact, setContact] = useState({
    name: "Temujin",
    address: "Mongolia",
    email: "sejanossotributario@mongolempire.com",
    telephone: "555-pay-your-tribute-555",
  });
  const [goal, setGoal] = useState(
    "Raze your lands, take your money, conquer your castle and leave on my banner at the place"
  );
  const [academicFormations, setAcademicFormations] = useState({
    institution: "University of the Khan",
    courseTitle: "Greater Khan formation course",
    ending: "Eternal Khan",
  });
  const [professional, setProfessional] = useState({
    companyName: "Mongolian Empire",
    timeAtCompany: "Forever and Before that",
    position: "Emperor",
    errants: "Conquer the World",
  });

  if (display === "input") {
    //Display Input
    return (
      <div className="input-display">
        <Contact contact={contact} onChangeHandler={contactUpdater} />
        <Objective goal={goal} onChangeHandler={objectiveUpdater} />
        <AcademicExp
          course={academicFormations}
          onChangeHandler={academicFormationUpdater}
        />
        <ProfessionalExp
          professional={professional}
          onChangeHandler={professionalUpdater}
        />
        <button onClick={() => setDisplayMode("html")}>Submit</button>
      </div>
    );
  } else {
    //Display HTML
    return (
      <>
        <div className="cv-display">
          <section>
            <h1>{contact.name}</h1>
            <p>{contact.address}</p>
            <p>{contact.email}</p>
            <p>{contact.telephone}</p>
          </section>
          <h2>Objetivo:</h2>
          <p>{goal}</p>
          <h2>Formação</h2>
          <ul>
            <li>
              {academicFormations.institution}, {academicFormations.courseTitle}
              , {academicFormations.ending}
            </li>
          </ul>
          <h2>Histórico profissional</h2>
          <ul className="pratical-experience">
            <li>
              <h3>{professional.companyName}</h3>
              <p>Período: {professional.timeAtCompany}</p>
              <p>Cargo: {professional.position}</p>
              <p>Atividades:</p>
              <p>{professional.errants}</p>
            </li>
          </ul>

          <button
            onClick={() => {
              setDisplayMode("input");
            }}
          >
            Edit
          </button>
        </div>
      </>
    );
  }

  function professionalUpdater(type, event) {
    switch (type) {
      case "companyName":
        setProfessional((prevProfessional) => ({
          ...prevProfessional,
          companyName: event.target.value,
        }));
        break;

      case "timeAtCompany":
        setProfessional((prevProfessional) => ({
          ...prevProfessional,
          timeAtCompany: event.target.value,
        }));
        break;

      case "position":
        setProfessional((prevProfessional) => ({
          ...prevProfessional,
          position: event.target.value,
        }));
        break;

      case "errants":
        setProfessional((prevProfessional) => ({
          ...prevProfessional,
          errants: event.target.value,
        }));
        break;

      default:
        break;
    }
  }

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

function ProfessionalExp({ professional, onChangeHandler }) {
  return (
    <section>
      <h1>Histórico Profissional</h1>
      <ul>
        <li className="input-section">
          <label>
            Nome da empresa
            <input
              type="text"
              value={professional.companyName}
              onChange={(event) => onChangeHandler("companyName", event)}
            />
          </label>
          <label>
            Quando entrou e quando saiu da empresa
            <input
              type="text"
              value={professional.timeAtCompany}
              onChange={(event) => onChangeHandler("timeAtCompany", event)}
            />
          </label>
          <label>
            Cargo
            <input
              type="text"
              value={professional.position}
              onChange={(event) => onChangeHandler("position", event)}
            />
          </label>
          <label>
            Atividades
            <textarea
              value={professional.errants}
              onChange={(event) => onChangeHandler("position", event)}
              cols="30"
              rows="10"
            ></textarea>
          </label>
        </li>
      </ul>
    </section>
  );
}
