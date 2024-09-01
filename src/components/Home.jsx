/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({ correoUsuario }) => {
  return (
    <div className='text-center fs-4 mt-4 fw-bold'>Bienvenido usuario {correoUsuario}{' '}
      <button className='btn btn-danger' onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  )
}

export default Home