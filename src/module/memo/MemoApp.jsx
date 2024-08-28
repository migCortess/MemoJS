import { Dashboard } from "./components/dashboard/Dashboard"
import valor1 from '../../assets/valor1.png'
import valor2 from '../../assets/valor2.png'
import valor3 from '../../assets/valor3.png'
import valor4 from '../../assets/valor4.png'
import valor5 from '../../assets/valor5.png'
import { useState } from "react"
import { useEffect } from "react"

const FeatureList = [
    valor1,
    valor2,
    valor3,
    valor4,
    valor5
  ]

export const MemoApp = () => {

    const [memoBlocksSorted,setMemoBlocksSorted] = useState([]);
    const [animations, setAnimations] = useState(false);
    const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  

    useEffect(() => {
        const shuffleList = ShuffleBlocks([...FeatureList,...FeatureList]);
        setMemoBlocksSorted(shuffleList.map((feature,i) => (
          {
          index:i,
          feature,
          flipped:false
          }
      )));
      }, [])

    const ShuffleBlocks = (FeatureList) => {

        //primer for para recorrer arreglo (Feature * 2)
        for(let i = FeatureList.length - 1; i > 0; i--){

          const j = Math.floor(Math.random()*(i+1));
            //destructuración conmutativa (o destructuración para intercambio de valores).
          [FeatureList[i],FeatureList[j]] = [FeatureList[j],FeatureList[i]]

          //console.log(FeatureList)
        };
        return FeatureList;
      } 

      
  const handleMemoClick = (memoBlock) => {

    //Al que se le dio Click
    const invertedMemoBlock = {...memoBlock,flipped:true}

    //Copia de Arreglo original
    let memoBlocksCopy=[...memoBlocksSorted]
    //a la copia se actualiza el que se dio click
    memoBlocksCopy.splice(memoBlock.index,1,invertedMemoBlock);

    //se setea el memo en el estado
    setMemoBlocksSorted(memoBlocksCopy)

    //validamos para saber que accion realizar
    if(selectedMemoBlock===null){
        //si es el primero se setea como seleccionado
      setSelectedMemoBlock(memoBlock)
      //si son iguales se dejan en true y se setea el seleccionado en null
    }else if(selectedMemoBlock.feature === memoBlock.feature){
      setSelectedMemoBlock(null)
      //en caso contrario se realiza la animacion para volver a estado original
    }else {
      setAnimations(true)
      //se bloquea acciones por un segundo para restaurar el tablero
      setTimeout(() => {
        memoBlocksCopy.splice(memoBlock.index,1,memoBlock);
        memoBlocksCopy.splice(selectedMemoBlock.index,1,selectedMemoBlock);
        setMemoBlocksSorted(memoBlocksCopy);
        setSelectedMemoBlock(null)
        setAnimations(false)

      },1000)
    }
  }

  return (
    <div className="Memo">
        <h1>Memorama Multi</h1>
        <Dashboard memoBlocks = {memoBlocksSorted} handleMemoClick={handleMemoClick} animations={animations}/>
    </div>
  )
}
