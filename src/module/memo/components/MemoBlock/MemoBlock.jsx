import MLTICover from '../../../../assets/BackCover.jpg'
import './MemoBlock.css'

export const MemoBlock = ({block,handleMemoClick,animations}) => {
  return (
    <div className='memo-block'>
    <div className={`memo-block-inner ${block.flipped && "memo-block-flipped"}`} onClick={() => !block.flipped && !animations && handleMemoClick(block)}>
    <div className="memo-block-front"><img className='img-block' src={MLTICover}></img></div>
    <div className="memo-block-back"><img className='img-block' src={block.feature} alt="a" /></div>
    </div>
    </div>
  )
}
