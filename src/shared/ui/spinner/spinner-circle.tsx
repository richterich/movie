export const SpinnerCircle = () => {
  return (
    <svg className="animate-circle max-h-[96px] max-w-[96px] fill-sky-800" viewBox="0 0 100 100">
      <circle
        className="animate-svg-circle origin-center fill-transparent stroke-sky-800 stroke-[8px] [stroke-dasharray:285] [stroke-linecap:round]"
        cx="50"
        cy="50"
        r="45"></circle>
    </svg>
  );
};
