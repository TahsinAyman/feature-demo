import personRepository from "./module/person/repository/repository";

// Add Repository in this object
const repository = {
  person: personRepository
};

export default repository;