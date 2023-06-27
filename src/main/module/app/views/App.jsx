import MainRoute from "../../../Routes";
import PersonController from "../../person/controller/FetchPersonController";

export default function App(props) {
  return (
    <div>
      <h1>Header</h1>
      <MainRoute />
      <h1>Footer</h1>
    </div>
  )
}
