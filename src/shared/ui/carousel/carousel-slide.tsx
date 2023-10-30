import {type PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  lazy?: string | boolean;
}

export const CarouselSlide = (props: Props) => {
  const {children, className, ...rest} = props;
  const attributes = {
    lazy: true,
    class: className,
    ...rest,
  };
  return <swiper-slide {...attributes}>{children}</swiper-slide>;
};
