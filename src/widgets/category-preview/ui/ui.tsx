import {type PropsWithChildren} from 'react';
import {MaterialIcon} from '~/shared/ui/icon';

interface Props extends PropsWithChildren {
  id: string;
  name: string;
  href: string;
}

export const CategoryPreview = ({id, name, href, children}: Props) => {
  return (
    <section id={id}>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <a
          href={href}
          title={`View more  from the "${name}" topic`}
          className="flex items-center [&>.material-symbols-outlined]:hover:translate-x-1 [&>h2]:hover:border-fuchsia-700">
          <h2 className="xs:text-xl xs:leading-8 border-l-4 border-black/60 pl-2 text-lg font-semibold leading-6 transition-colors duration-300 dark:border-white/80">
            {name}
          </h2>
          <MaterialIcon className="xs:text-[2rem] transition-transform duration-300" icon="chevron_right" />
        </a>
        <div className="relative pb-10 pt-4 before:absolute before:-left-4 before:bottom-0 before:top-0 before:z-10 before:w-4 before:bg-gradient-to-r before:from-white before:from-[60%] after:absolute after:-right-4 after:bottom-0 after:top-0 after:z-10 after:w-4 after:bg-gradient-to-l after:from-white after:from-[60%] before:dark:from-black after:dark:from-black before:sm:-left-6 before:sm:w-6 after:sm:-right-6 after:sm:w-6 before:lg:-left-8 before:lg:w-8 after:lg:-right-8 after:lg:w-8">
          {children}
        </div>
      </div>
    </section>
  );
};
