import React from 'react';
import { BackgroundLogin, ImageLogin, MainLogin, TitleLogin } from './styles';
import TextField from '@mui/material/TextField';
import userLogin from '../../assets/userLogin.svg'
import Button from '@mui/material/Button';


const Login: React.FC = () => {
  return (
    <MainLogin>
      <BackgroundLogin>
        <ImageLogin src={userLogin}/>
        <TitleLogin>BEM VINDO!</TitleLogin>

        <TextField placeholder='admin' label='Usuario' variant='standard'/>
        <br/>
        <TextField placeholder='********' label='Senha' variant='standard' type={'password'}/>
        <br/>
        <Button variant='contained'>Entrar</Button>
      </BackgroundLogin>
    </MainLogin>
  )
}

export default Login;