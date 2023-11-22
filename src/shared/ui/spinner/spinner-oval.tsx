import type {SVGAttributes} from 'react';

interface SpinnerAttributes extends SVGAttributes<SVGCircleElement> {}

const defaultAttributes: SVGAttributes<SVGCircleElement> = {
  strokeWidth: '4px',
  strokeDasharray: 220,
  strokeDashoffset: 220,
  strokeLinecap: 'round',
  stroke: '#fff',
};

export const SpinnerOval = (attr: SpinnerAttributes) => {
  const {width = 96, height = 96, ...rest} = attr;
  const attributes = Object.assign({...defaultAttributes}, rest);

  return (
    <svg width={width} height={height} className="max-h-[96px] max-w-[96px] fill-none" viewBox="0 0 100 100">
      <circle
        strokeWidth={attributes.strokeWidth}
        stroke={attributes.stroke}
        className="origin-center fill-transparent opacity-10"
        cx="50"
        cy="50"
        r="45"></circle>
      <circle {...attributes} className="origin-center animate-circle fill-transparent" cx="50" cy="50" r="45"></circle>
    </svg>
  );
};
