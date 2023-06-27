import MockAdapter from "axios-mock-adapter";
import application from "../../../../resources/application.json";
import axios from "axios";
import personRepository from "../../../../main/module/person/repository/repository";

describe("Person: repository testing", () => {
  let mockAdapter;
  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
  });
  it("Testing fetchAllRequest", async () => {
    const response = [{ id: 1, name: "Tahsin", age: 15 }];
    mockAdapter
      .onGet(`${application.backend}/path/to/demo`)
      .reply(200, response);
    const data = await personRepository.fetchAllPerson();
    expect(data).toEqual(response);
  });
});
