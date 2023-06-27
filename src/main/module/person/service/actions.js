import ActionCreator from './ActionCreator';
const actionCreator = new ActionCreator("person-api");
export const personFetchRequest = actionCreator.create("fetch");