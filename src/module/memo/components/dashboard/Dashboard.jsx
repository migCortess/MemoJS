import { MemoBlock } from '../MemoBlock/MemoBlock'
import './Dashboard.css'

export const Dashboard = ({memoBlocks,handleMemoClick, animations}) => {
  return (
    <main className="board">
    {memoBlocks.map((block,index)=>{
        return <MemoBlock key={`${index}_${block.feature}`} block={block} handleMemoClick={handleMemoClick} animations={animations}/>
    })}
</main>
  )
}
