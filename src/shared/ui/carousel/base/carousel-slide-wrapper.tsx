import {type PropsWithChildren} from 'react';

interface Props {
  className?: string;
  lazy?: string | boolean;
}

export const CarouselSlide = (props: PropsWithChildren<Props>) => {
  const {children, className, ...rest} = props;
  const attributes = {
    lazy: false,
    class: className,
    ...rest,
  };
  return <swiper-slide {...attributes}>{children}</swiper-slide>;
};
