import {type PropsWithChildren} from 'react';
import {type SwiperOptions} from 'swiper/types';
import {IconTallButton} from '../buttons';
import {CarouselContainer} from './base';

interface Props extends SwiperOptions {
  className?: string;
}

export const NavigationCarousel = (props: PropsWithChildren<Props>) => {
  const {children, ...rest} = props;
  const uuid = crypto.randomUUID();
  const params: Props = {
    ...rest,
    navigation: {
      nextEl: `#next-${uuid}`,
      prevEl: `#prev-${uuid}`,
    },
  };

  return (
    <>
      <CarouselContainer {...params}>{children}</CarouselContainer>
      <IconTallButton
        id={`prev-${uuid}`}
        className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/25 bg-black/70 transition-[background-color,border-color,opacity,visibility] duration-300 hover:border-white/50 hover:bg-black/80 disabled:invisible disabled:opacity-0 lg:flex [&>.material-symbols-outlined]:opacity-50 [&>.material-symbols-outlined]:transition-opacity [&>.material-symbols-outlined]:duration-300 [&>.material-symbols-outlined]:hover:opacity-100"
        text="Left"
        icon="chevron_left"
      />
      <IconTallButton
        id={`next-${uuid}`}
        className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-1/2 rounded-xl border border-white/25 bg-black/70 transition-[background-color,border-color,opacity,visibility] duration-300 hover:border-white/50 hover:bg-black/80 disabled:invisible disabled:opacity-0 lg:flex [&>.material-symbols-outlined]:opacity-50 [&>.material-symbols-outlined]:transition-opacity [&>.material-symbols-outlined]:duration-300 [&>.material-symbols-outlined]:hover:opacity-100"
        text="Right"
        icon="chevron_right"
      />
    </>
  );
};
