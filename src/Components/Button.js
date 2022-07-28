import React from 'react';

import styled from 'styled-components';

export default function Button(props){

  return (

    <div align='left'>

      <ButtonContainer className={props.className} {...props}>

      Submit

    </ButtonContainer>

    </div>

  );

};

const ButtonContainer = styled.button`

color: ${props => props.varaint || "  #FF0000"};

font-size: ${props => props.fontSize || "20px"};

`;