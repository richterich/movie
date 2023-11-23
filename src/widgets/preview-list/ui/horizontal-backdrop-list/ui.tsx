import type {PropsWithChildren} from 'react';
import {NavigationCarousel} from '~/shared/ui/carousel';
import {SpinnerCircle} from '~/shared/ui/spinner';
import styles from './styles.postcss?inline';

interface Props {
  isFetching: boolean;
  initialSlide?: number;
}

export const HorizontalBackdroplList = ({isFetching, initialSlide, children}: PropsWithChildren<Props>) => {
  return isFetching ? (
    <div className="flex items-center justify-center">
      <SpinnerCircle />
    </div>
  ) : (
    <NavigationCarousel
      injectStyles={[styles]}
      slidesPerView={1}
      autoplay={{
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      loopAdditionalSlides={1}
      initialSlide={initialSlide}
      breakpoints={{
        1024: {spaceBetween: 16},
        768: {spaceBetween: 14},
        640: {spaceBetween: 12},
        0: {spaceBetween: 10},
      }}>
      {children}
    </NavigationCarousel>
  );
};
