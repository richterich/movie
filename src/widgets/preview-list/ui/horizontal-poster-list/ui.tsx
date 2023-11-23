import type {PropsWithChildren} from 'react';
import {NavigationCarousel} from '~/shared/ui/carousel';
import {SpinnerCircle} from '~/shared/ui/spinner';
import styles from './styles.postcss?inline';

interface Props {
  isFetching: boolean;
}

export const HorizontalPosterlList = ({isFetching, children}: PropsWithChildren<Props>) => {
  return isFetching ? (
    <div className="flex items-center justify-center">
      <SpinnerCircle />
    </div>
  ) : (
    <NavigationCarousel
      injectStyles={[styles]}
      breakpoints={{
        1280: {slidesPerView: 4.3, spaceBetween: 16},
        1024: {slidesPerView: 3.6, spaceBetween: 16},
        768: {slidesPerView: 3.3, spaceBetween: 14},
        640: {slidesPerView: 2.6, spaceBetween: 12},
        0: {slidesPerView: 2.3, spaceBetween: 10},
      }}
      freeMode={{momentumBounceRatio: 0}}>
      {children}
    </NavigationCarousel>
  );
};
