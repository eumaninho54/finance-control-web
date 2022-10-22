import React, { useEffect, useLayoutEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { BackgroundLoading } from './styles';

interface LoadingProps {
  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = ({isLoading}) => {
  const [opacity, setOpacity] = useState(1)
  const [display, setDisplay] = useState('flex')
  const [pointerEvents, setPointerEvents] = useState('all')

  useLayoutEffect(() => {
    isLoading 
    ? setOpacity(1)
    : setOpacity(0)

    setTimeout(() => {
      setDisplay('none')
    }, 1800);

    setTimeout(() => {
      setPointerEvents('none')
    }, 1000)

  
  }, [isLoading])

  return (
    <BackgroundLoading 
      opacity={opacity} 
      display={display} 
      pointerEvents={pointerEvents}>
      <CircularProgress/>
    </BackgroundLoading>
  )
}

export default Loading;