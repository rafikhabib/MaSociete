import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Presentation() {

    const [titre] = useState("Qui sommes nous ?");
    const [contact] = useState({
        nom: 'Ma Société',
        email: 'info@masociete.com',
        logo: <img src='logo512.png' alt='logo Scoiété' width="100px" length="100px"></img>
    });
    const [departs] = useState([
        { id: 1, nom: 'Commercial' },
        { id: 2, nom: 'Développement' },
        { id: 3, nom: 'Maintenance' }]);

    return (
        <div className="m-4">
            <div>
                <div className="card">
                    <div className="card-header">
                        <strong><label>{titre}</label></strong>
                    </div>

                    <div className="row p-2">
                        <div className="col col-auto">
                            {contact.logo}
                        </div>

                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">Société : {contact.nom}</li>
                                <li className="list-group-item">Email : {contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="card-header">
                        <strong>Liste des départements</strong>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Département</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    departs.map((d, index) =>
                                        <tr key={index}>
                                            <td>{d.id}</td>
                                            <td>{d.nom}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Presentation;