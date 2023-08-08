import React from 'react'
import './Button.style.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ButtonAdd = () => {
    const {t} = useTranslation()
  return (
    <Link to='/create' className='btn_add'>
        <svg
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.5 1V17M1.5 9L17.5 9'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='btn_add_label'>{t('Add_new_event')}</span>
    </Link>
  );
}

export default ButtonAdd
