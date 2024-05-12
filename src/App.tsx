import { useState } from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client';

const GET_MENUS = gql`
query {
  menus {
    identifier
    label
  }
}
`

function App() {
  const { loading, error, data } = useQuery(GET_MENUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div>
        Choose a menu:
        <ul>
        {data.menus.map(({label, identifier}) => {
          return (
            <li key={identifier}>{label}</li>
          )
        })}
        </ul>
      </div>
    </>
  )
}

export default App
