import { ReactComponent as GameRules } from '../assets/image-rules.svg';
import { ReactComponent as Close } from '../assets/icon-close.svg';

const Rules = props => {
  
  if(!props.modalIsOpen){
    return null
  }

  return <div className='Modal'>
    <div className='Content'>
      <div className='Header'>
        <h1>RULES</h1>
        <button onClick={props.onClose}><Close /></button>
      </div>
      <div className='Footer'>
        <GameRules id="rulesImg"/>
      </div>
    </div>
  </div>
}

export default Rules;