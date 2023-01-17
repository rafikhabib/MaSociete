import { useState } from "react";

function Apropos() {
  const [titre] = useState("Qui sommes nous ?");
  const [contact] = useState({
    nom: "Ma Société",
    email: "info@masociete.com",
    logo: (
      <img
        src="logo512.png"
        alt="logo Scoiété"
        width="100px"
        length="100px"
      ></img>
    ),
  });
  return (
    <div className="m-4">
      <div>
        <div className="card">
          <div className="card-header">
            <strong>
              <label>{titre}</label>
            </strong>
          </div>

          <div className="row p-2">
            <div className="col col-auto">{contact.logo}</div>

            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">Société : {contact.nom}</li>
                <li className="list-group-item">Email : {contact.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
