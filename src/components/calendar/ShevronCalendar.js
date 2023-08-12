/** @format */

const ShevronCalendar = ({ dateOpen }) => {
  return (
    <svg
      width='12'
      height='7'
      viewBox='0 0 12 7'
      fill='none'
      className={dateOpen ? "c_shevron_up" : "c_shevron_down"}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11 6L6 1L1 6'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ShevronCalendar