import styled from '@emotion/styled';

interface FactsBlockStyledProps {
  isHideBlock: boolean;
}

export const FactsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
flex: 1;
`

export const FactsBlockStyled = styled.div`
display: flex;
flex-direction: column;
border: solid skyblue 1.5px;


`
export const ButtonContainer = styled.div`
display:flex;
border: solid blue 1px;
border-radius: 5px;
gap: 30px;
width: 300px;


`


export const FactsBlock = styled.div<FactsBlockStyledProps>`
display: ${({isHideBlock}) => isHideBlock ? 'none' : 'flex'};
flex-direction: column;
width: 500px;
gap: 15px;
`
export const LoaderContainer = styled.div`
display: flex;
flex: 1;
`
