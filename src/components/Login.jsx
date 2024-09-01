/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Imagen from '../assets/4957136.jpg'
import ImageProfile from '../assets/profilePicture.webp'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false)

  const functAuth = async (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)

      } catch (error) {
        alert("Asegurese que la contraseña tenga al menos 8 caracteres")
      }
    }
    else {
      try {
        await signInWithEmailAndPassword(auth, email, password)

      } catch (error) {
        (alert("Email o contraseña incorrectos"))
      }
    }

  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImageProfile} alt="" className='estilo-profile' />
              <form onSubmit={functAuth}>
                <input type="email" placeholder='Ingresar Email' className='cajatexto' id='email' />
                <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
                <button className='btn btn-primary w-100'>{registrando ? 'Registrarse' : 'Inicia Sesion'}</button>
              </form>
              <div className='mt-4'>
                <small className='text-secondary'>
                  {registrando ? 'Ya tienes una cuenta? ' : 'No tienes una cuenta? '}
                  <button className='btn btn-link p-0 mb-1' style={{ fontSize: '14px' }} onClick={() => setRegistrando(!registrando)}>
                    {
                      registrando ? 'Iniciar sesion' : 'Registrarse'
                    }
                  </button>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={Imagen} alt="" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  )
}

export default Login