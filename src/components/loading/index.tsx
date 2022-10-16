import React from 'react';
import { CircularProgress } from '@mui/material';
import { BackgroundLoading } from './styles';


const Loading: React.FC = () => {

  return (
    <BackgroundLoading>
      <CircularProgress  />
    </BackgroundLoading>
  )
}

export default Loading;