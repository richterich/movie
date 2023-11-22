import type {SVGAttributes} from 'react';

interface SpinnerAttributes extends SVGAttributes<SVGCircleElement> {}

const defaultAttributes: SVGAttributes<SVGCircleElement> = {
  strokeWidth: '4px',
  strokeDasharray: 285,
  strokeLinecap: 'round',
  stroke: '#86198f',
};

export const SpinnerCircle = (attr: SpinnerAttributes) => {
  const {width = 96, height = 96, ...rest} = attr;
  const attributes = Object.assign({...defaultAttributes}, rest);

  return (
    <svg
      width={width}
      height={height}
      className="max-h-[96px] max-w-[96px] animate-circle fill-none"
      viewBox="0 0 100 100">
      <circle
        {...attributes}
        className="origin-center animate-svg-circle fill-transparent"
        cx="50"
        cy="50"
        r="45"></circle>
    </svg>
  );
};
