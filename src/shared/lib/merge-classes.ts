import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

function merge(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export {merge};
