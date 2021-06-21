import React from "react";
import Chelsea from "./../../images/cgabel.jpg";
import Alicia from "./../../images/apowell.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="aboutOne">
        <h1> Grandview Healthcare Solutions</h1>
        <h2>Manitoba Community Healthcare Advocacy Group </h2>
        <p>
          Grandview Healthcare Solutions, established in 2017, grew out of a
          community response from Grandview and Tootinaowaziibeeng Treaty
          Reserve to maintain the Grandview Emergency Medical Services station
          as an essential service of the local healthcare system for both
          communities and surrounding areas. The role of the group has expanded
          to advocate that the Grandview District Hospital be maintained as an
          acute care facility with 24/7 Emergency Service. The group promotes
          keeping Healthcare close to home in rural Manitoba and supports the
          Grandview Healthcare model as a viable system, essential for the
          health of all community members.
        </p>
      </div>
      <div className="aboutTwo">
        <div className="containerOne">
          <div className="imageOne">
            <img
              src={Chelsea}
              alt="Chelsea portrait"
              className="chelseaPhoto"
            />
          </div>
          <p className="firstParagraph">
            <span className="name">Dr. Gabel</span> holds a{" "}
            <strong>Canada Research Chair</strong> in Indigenous Well-Being,
            Community-Engagement, and Innovation and is an Associate Professor
            in the Department of Health, Aging and Society and the Indigenous
            Studies Program at McMaster University in Hamilton, Ontario. Dr.
            Gabel is one of Canada’s leading Indigenous scholars and has a
            unique set of perspectives and expertise that has helped to advance
            Indigenous health and well-being and self-determination efforts in
            Canada.
          </p>
          <p>
            Dr. Gabel's research focuses on building partnerships with
            Indigenous communities across Canada and internationally to design
            and implement health and well-being promoting interventions as a way
            to address inequities.{" "}
          </p>
          <p>
            Dr. Gabel is the former Director of the{" "}
            <strong>McMaster Indigenous Research Institute</strong>, an
            Institute dedicated to Indigenous ways of knowing and research and
            the former director of the{" "}
            <strong>Indigenous Studies Program</strong>. Dr. Gabel is involved
            in a number of research collaborations across Canada that integrate
            her expertise in community-based participatory research, Indigenous
            health policy, digital technology, intervention research and
            Indigenous health and well-being. She is a member of the{" "}
            <strong>
              Canadian Institutes of Health Research (CIHR) Standing Committee
              on Ethics
            </strong>{" "}
            that provides high-level strategic advice on the ethical, legal and
            socio-cultural dimensions of CIHR's mandate and a member of the{" "}
            <strong>Indigenous Advisory Circle (IAC)</strong> whose purpose is
            to advise the Federation of the Humanities and Social Science and to
            inform its efforts to advance reconciliation in the post-secondary
            education sector in general, and in the humanities and social
            sciences in particular.
          </p>
          <p>
            Dr. Gabel has published in top journals in areas such as:
            community-engaged research, bioethics, Indigenous women, Indigenous
            health policy and Indigenous health and well-being.
          </p>
          <p>
            Email: <a href="mailto:gabelc@mcmaster.ca">gabelc@mcmaster.ca</a>
          </p>
        </div>
        <div className="containerTwo">
          <div className="imageTwo">
            <img src={Alicia} alt="Alicia portrait" className="aliciaPhoto" />
          </div>
          <div className="bioTwo">
            <p>
              <span className="name">Alicia Powell</span> is a settler scholar
              and educator from Binbrook, Ontario. Alicia holds a PhD in Health
              and Society from McMaster University, and studies rural health,
              health equity and healthcare in Canada. Alicia works in
              conservation, education and recreation, and is vice-president of
              her local agricultural society.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:kleer.michaela@gmail.com">powellak@mcmaster.ca</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
