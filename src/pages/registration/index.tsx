import React, { useEffect } from 'react';

// import { Container } from './styles';

interface RegistrationProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Registration: React.FC<RegistrationProps> = ({ setPositionSelected }) => {
  useEffect(() => {
    setPositionSelected("185px")
  }, [])

  return <div />;
}

export default Registration;