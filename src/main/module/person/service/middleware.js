import { personFetchRequest } from "./actions";
import { personActions } from "./slice";

const fetchAllPerson = (repository) => (store) => (next) => async (action) => {
  if (action.type !== personFetchRequest.type) return next(action);
  const persons = await repository.person.fetchAllPerson();
  next(personActions.addMany(persons));
}

const personMiddleware = [fetchAllPerson];
export default personMiddleware;
