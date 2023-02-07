import { FC } from 'react'
import { BuyPageWrapper } from './buyPage.styles'
import { Link } from 'react-router-dom'
const smile = require('../../assets/image/HD-wallpaper-smiley-have-nice-day-nice-smiley-yellow-day-face-smile.jpg')

export const BuyPage: FC = () => {
  return (
    <BuyPageWrapper>
      <div>
        <img src={smile} alt="smile" className='smile' />
        <div className='text'>!!! PLEASE BUY ME !!!</div>
        <Link to="/" className='link'>Go back to main page</Link>
      </div >
    </BuyPageWrapper>)



}