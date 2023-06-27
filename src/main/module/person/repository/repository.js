import application from "../../../../resources/application.json";
import axios from "axios";

axios.defaults.baseURL = application.backend;

const personRepository = {
  fetchAllPerson: async () => {
    const response = await axios.get("/path/to/demo");
    return response.data
  }
};
export default personRepository;