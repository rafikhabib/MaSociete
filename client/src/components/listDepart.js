import { useEffect, useState } from "react";
import { getAll, add, update, remove } from "../services/operationsDepart";
function ListDepart() {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({ id: null, nom: "" });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleNewDepartmentChange = (event) => {
    setNewDepartment({ ...newDepartment, nom: event.target.value });
  };

  const handleEditDepartment = (department) => {
    setNewDepartment(department);
    setIsEditMode(true);
  };

  const handleDeleteDepartment = (department) => {
    remove(department._id, () => getDepartements);
  };

  const handleSubmit = () => {
    if (isEditMode) {
      let newDepart = { id: newDepartment.id, nom: newDepartment.nom };
      update(newDepartment._id, newDepart, () => getDepartements);
    } else {
      newDepartment.id = Date.now();
      add(newDepartment, () => {
        getDepartements();
      });
    }
    setNewDepartment({ id: null, nom: "" });
    setIsEditMode(false);
  };

  const getDepartements = () => {
    getAll((res) => {
      setDepartments(res.data);
    });
  };

  useEffect(() => {
    getDepartements();
  });

  return (
    <div className="m-4">
      <div>
        <div className="card m-2">
          <div className="card-header">
            <strong>Liste des départements</strong>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Nouveau Département"
                value={newDepartment.nom}
                onChange={handleNewDepartmentChange}
              />
              <button className="btn btn-primary" onClick={handleSubmit}>
                {isEditMode ? "Modifier Département" : "Ajouter Département"}
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Département</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department) => (
                  <tr key={department.id}>
                    <td>{department.id}</td>
                    <td>{department.nom}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleEditDepartment(department)}
                      >
                        Modifier
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteDepartment(department)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListDepart;
