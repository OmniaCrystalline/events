import React from 'react'
import { Link } from 'react-router-dom'
import './BackLink.style.css'
import { useTranslation } from 'react-i18next'

const BackLink = () => {
  const {t} = useTranslation()
  return (
      <Link to='/' className='back'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M4 12L20 12M4 12L10 6M4 12L10 18'
            stroke='#7B61FF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        {t('back')}
      </Link>
  );
}

export default BackLink
