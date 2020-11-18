import { useSelector } from 'react-redux'
import { getCatalogoByPrograma, getAllProgramaNumbers } from 'Redux/catalogos'
import UiWrapper from 'components/UiWrapper'
import Slide from 'components/Slide'


const renderCurrentYear = () => new Date().getFullYear(); 

const pageFilmes = () => {
  
  const getCatalogoByProgramaFn = useSelector(getCatalogoByPrograma);
  const getAllProgramaNumbersFn = useSelector(getAllProgramaNumbers);

  const renderPrograma = (programaNumber) => {

    console.log(
      getCatalogoByProgramaFn(programaNumber))

    return (
      <section key={programaNumber}>
        PROGRAMA {programaNumber}
        <div>
          {
            getCatalogoByProgramaFn(programaNumber).map((filme, index) => {
              return (
                <div key="index">
                  {filme.link}
                </div>
              )
            })
          }
        </div>
  
      </section>
    )
  
  }


  const renderProgramas = () => (
    [...getAllProgramaNumbersFn].map(
      (programaNumber) => renderPrograma(programaNumber)
    )
  )

  return (
    <UiWrapper>
      <section>
        <h1>Catalogo {renderCurrentYear()}</h1>
        <img src=""/>
      </section>

      {/* {renderProgramas()} */}

      <Slide/>

    </UiWrapper>
  )
}

export default pageFilmes
