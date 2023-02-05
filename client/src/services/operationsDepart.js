import axios from "axios";

export const getAll = (callback) => {
  axios.get("http://localhost:4000/departements").then((res) => callback(res));
};

export const add = (dept, callback) => {
  axios
    .post("http://localhost:4000/add", dept)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const update = (id, dept, callback) => {
  axios
    .put(`http://localhost:4000/update/${id}`, dept)
    .then((message) => callback(message))
    .catch((err) => callback(err));
};
export const remove = (id, callback) => {
  axios
    .delete(`http://localhost:4000/delete/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};
