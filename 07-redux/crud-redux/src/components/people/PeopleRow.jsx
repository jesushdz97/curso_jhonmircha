const PeopleRow = ({ data }) => {
  const { id, name, lastname, age, sex } = data
  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{sex}</td>
      <td className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-1'>
        <button className='btn btn-sm btn-warning'>Editar</button>
        <button className='btn btn-sm btn-danger'>Eliminar</button>
      </td>
    </tr>
  )
}
export default PeopleRow
