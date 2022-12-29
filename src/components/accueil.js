import 'bootstrap/dist/css/bootstrap.min.css';

const msg ="Bienvenue à notre site de la société : Ma Société";
function Acceuil() {
    return (
        <div className="m-4">
            <div className="card">
                    <div className="card-header">
                        <strong><label>Ma société</label></strong>
                    </div>

                    <div className="row p-2">
                        <div className="col col-auto">
                            {msg}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Acceuil;