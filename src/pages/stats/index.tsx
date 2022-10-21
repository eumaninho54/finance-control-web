import React, { useEffect } from 'react';

// import { Container } from './styles';

interface StatsProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Stats: React.FC<StatsProps> = ({ setPositionSelected }) => {
  useEffect(() => {
    setPositionSelected("305px")
  }, [])
  
  return <div />;
}

export default Stats;