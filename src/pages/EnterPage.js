import { Link } from 'react-router-dom';
import sur from '../assets/1.png'
import sur1 from '../assets/2.png'

export const EnterPage = () => {
    
  return (
    <main className='flex justify-between'>

      <div>
        <Link to='/academy' className='w-1/2'>
          <img src={sur} alt='Enter img' />
        </Link>
      </div>

      <div>
        <Link to='/agency' className='w-1/2'>
          <img src={sur1} alt='Ent img'  />
        </Link>
      </div>

    </main>
  )
};
