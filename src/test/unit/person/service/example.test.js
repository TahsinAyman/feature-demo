import { personFetchRequest } from "../../../../main/module/person/service/actions";
import configureAppStore from "../../../../main/store";

describe("Person: Integration Testing in Service", () => {
  it("Checking Fetch All", async () => {
    const store = configureAppStore({
      person: {
        fetchAllPerson: async () => [{ id: 1, name: "tahsin", age: 15 }],
      },
    });
    await store.dispatch(personFetchRequest());
    const persons = store.getState().entities.persons;
    console.log(persons)
    expect(persons[0]).toEqual({ id: 1, name: "tahsin", age: 15 });
  });
});
