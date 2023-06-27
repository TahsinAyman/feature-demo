import { personActions } from "../../../../main/module/person/service/slice";
import repository from "../../../../main/repository";
import configureAppStore from "../../../../main/store";

describe("Person: Slice Testing", () => {
  it("Testing add functionality", async () => {
    const store = configureAppStore(repository);
    const data = { id: 1, name: "Tahsin", age: 15 };
    await store.dispatch(personActions.add(data));
    const persons = store.getState().entities.persons;
    expect(persons[persons.length - 1]).toBe(data);
  });
});
