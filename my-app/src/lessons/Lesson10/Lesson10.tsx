import Button from 'components/Button/Button'
import Loader from 'components/Loader/Loader'
import { useEffect, useState } from 'react'
import {v4} from 'uuid'
import {
  ButtonContainer,
  FactsBlock,
  FactsBlockStyled,
  FactsContainer,
  LoaderContainer
} from './styles'

function Lesson10() {
  const [facts, setCatFacts] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCatFact = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://catfact.ninja/fact')
      const result = await response.json()
      if (!response.ok) {
        throw Object.assign(new Error('No files found'), {errorResult: result})
      } else {
        setCatFacts(prevValue => [...prevValue, result.fact])
      }
      
    } catch (error){
      console.log('error');
      
    } finally {
      setLoading(false)
    }
  }
console.log(getCatFact);



  useEffect(() => { getCatFact() }, [])
  const deleteAllFacts = () => {
    setCatFacts([])
  }

  const catFacts = facts.map((catFact) => {
    return <FactsBlockStyled key={v4()}>{catFact}</FactsBlockStyled>
  })
    
  return <FactsContainer>
    <ButtonContainer>
      <Button name={'GET MORE INFO'} onClick={getCatFact}/>
    </ButtonContainer>

    <FactsBlock isHideBlock={!facts.length}>{loading && <LoaderContainer><Loader /></LoaderContainer>}{catFacts}</FactsBlock>
    
    <ButtonContainer>
      
    <Button name={'DELETE ALL FACTS'} onClick={deleteAllFacts} />
    </ButtonContainer>
 </FactsContainer>
}

export default Lesson10;