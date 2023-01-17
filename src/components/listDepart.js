import { useState } from "react";

function ListDepart() {
  const [departments, setDepartments] = useState([
    { id: 1673985110156, name: "Commercial" },
    { id: 1673985115410, name: "Développement" },
    { id: 1673985129990, name: "Maintenance" },
  ]);
  const [newDepartment, setNewDepartment] = useState({ id: null, name: "" });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleNewDepartmentChange = (event) => {
    setNewDepartment({ ...newDepartment, name: event.target.value });
  };

  const handleEditDepartment = (department) => {
    setNewDepartment(department);
    setIsEditMode(true);
  };

  const handleDeleteDepartment = (id) => {
    setDepartments(departments.filter((department) => department.id !== id));
  };

  const handleSubmit = () => {
    if (isEditMode) {
      setDepartments(
        departments.map((department) =>
          department.id === newDepartment.id ? newDepartment : department
        )
      );
    } else {
      setDepartments([...departments, { ...newDepartment, id: Date.now() }]);
    }
    setNewDepartment({ id: null, name: "" });
    setIsEditMode(false);
  };

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
                value={newDepartment.name}
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
                    <td>{department.name}</td>
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
                        onClick={() => handleDeleteDepartment(department.id)}
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
