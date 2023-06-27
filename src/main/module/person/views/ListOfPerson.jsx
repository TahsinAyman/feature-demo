export default function ListOfPerson({ data, events }) {
  return (
    <ul>
      {data.persons.map(person => (
        <li>{JSON.stringify(person)}</li>
      ))}
    </ul>
  )
};