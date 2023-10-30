import type {SwiperContainer, SwiperSlide} from 'swiper/element';

declare global {
  type Id = number | null | undefined;

  declare namespace App {
    declare type AppDispatch = import('~/app/providers/app-store.config').AppDispatch;
    declare type RootState = import('~/app/providers/app-store.config').RootState;
  }

  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<SwiperContainer>, SwiperContainer> & {
        init: string | boolean;
      };
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<SwiperSlide>, SwiperSlide> & {
        lazy: string | boolean;
      };
    }
  }
}

export {};
