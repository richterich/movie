import {type PropsWithChildren, useEffect, useRef} from 'react';
import {register, type SwiperContainer} from 'swiper/element/bundle';
import {type SwiperOptions} from 'swiper/types';

interface Props extends SwiperOptions {
  className?: string;
}

export const CarouselContainer = (props: PropsWithChildren<Props>) => {
  const swiper = useRef<SwiperContainer>(null);
  const {children, className, ...rest} = props;

  useEffect(() => {
    register();
    const params: SwiperOptions & {class?: string} = {
      class: className,
      ...rest,
    };
    Object.assign(swiper.current || {}, params);
    swiper.current?.initialize();
  }, [className, rest]);

  return (
    <swiper-container init={false} ref={swiper}>
      {children}
    </swiper-container>
  );
};
