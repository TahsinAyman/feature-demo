import { useDispatch, useSelector } from "react-redux";
import ListOfPerson from "../views/ListOfPerson";
import { useEffect } from "react";
import { personFetchRequest } from "../service/actions";

export default function FetchPersonController() {
  const persons = useSelector((state) => state.entities.persons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personFetchRequest());
  }, []);

  const data = {
    persons,
  };

  return <ListOfPerson data={data} />;
}
