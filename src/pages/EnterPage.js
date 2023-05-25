import { Link } from 'react-router-dom';
import sur from '../assets/1.png'
import sur1 from '../assets/2.png'
import { useState } from 'react';

export const EnterPage = () => {

  const [hover, setHover] = useState(false)

  const [hover2, setHover2] = useState(false)

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };
    
  return (
    <main className='flex justify-between'>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative'>
        <Link to='/academy' className='w-1/2'>
          <img className='sur' src={sur} alt='Enter img' />
          {hover && <div className='hover-text border-solid border-2 border-slate-300 p-2'>
            Lorem ipsum Lorem ipsum dolor Lorem, ipsum dolor. Lorem, ipsum. sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>}
        </Link>
      </div>

      <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='relative'>
        <Link to='/agency' className='w-1/2'>
          <img className='sur' src={sur1} alt='Ent img'  />
          {hover2 && <div className='hover-text2 border-solid border-2 border-slate-300 p-2'>
            Lorem ipsumum dolor sit amet Lorem, ipsum dolor. Lorem, ipsum. sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>}
        </Link>
      </div>

    </main>
  )
};
