import React, { useEffect, useState } from 'react';
import { BackgroundLogin, ImageLogin, MainLogin, TitleLogin } from './styles';
import TextField from '@mui/material/TextField';
import userLogin from '../../assets/userLogin.svg'
import Button from '@mui/material/Button';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { login } from '../../store/admin/thunks/login';


const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    dispatch(login({username: username, password: password}))
  }

  return (
    <MainLogin>
      <BackgroundLogin>
        <ImageLogin src={userLogin}/>
        <TitleLogin>BEM VINDO!</TitleLogin>

        <TextField 
          value={username} 
          onChange={(value) => setUsername(value.target.value)}
          placeholder='admin' 
          label='Usuario' 
          variant='standard'/>
        <br/>
        <TextField 
          value={password}
          onChange={(value) => setPassword(value.target.value)} 
          placeholder='********' 
          label='Senha' 
          variant='standard' 
          type={'password'}/>
        <br/>
        <Button onClick={() => onLogin()} variant='contained'>Entrar</Button>
      </BackgroundLogin>
    </MainLogin>
  )
}

export default Login;