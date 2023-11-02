import {type PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import {MaterialIcon} from '~/shared/ui/icon';

interface HeaderProps {
  name: string;
  href: string; // TODO: part of a path to page with complete "category" list with pagination, filters, sorting etc.
}

interface CategoryProps {
  id: string;
}

export const Category = ({id, children}: PropsWithChildren<CategoryProps>) => {
  return (
    <section id={id} className="overflow-x-hidden">
      <div className="mx-auto max-w-7xl overflow-x-visible px-4 sm:px-6 lg:px-8 xl:overflow-x-hidden">{children}</div>
    </section>
  );
};

const CategoryPreview = ({children}: PropsWithChildren) => {
  return (
    <div className="relative my-10 before:absolute before:-left-4 before:bottom-0 before:top-0 before:z-10 before:hidden before:w-4 before:bg-gradient-to-r before:from-white before:from-[60%] after:absolute after:-right-4 after:bottom-0 after:top-0 after:z-10 after:hidden after:w-4 after:bg-gradient-to-l after:from-white after:from-[60%] before:dark:from-black after:dark:from-black before:sm:-left-6 before:sm:w-6 after:sm:-right-6 after:sm:w-6 before:lg:-left-8 before:lg:w-8 after:lg:-right-8 after:lg:w-8 xl:before:block xl:after:block">
      {children}
    </div>
  );
};

const CategoryHeader = ({href, name}: PropsWithChildren<HeaderProps>) => {
  return (
    <Link
      to={href}
      title={`View more  from the "${name}" topic`}
      className="flex items-center [&>.material-symbols-outlined]:hover:translate-x-1 [&>h2]:hover:border-fuchsia-700">
      <h2 className="border-l-4 border-black/60 pl-2 text-lg font-semibold leading-6 transition-colors duration-300 dark:border-white/80 xs:text-xl xs:leading-8">
        {name}
      </h2>
      <MaterialIcon className="transition-transform duration-300 xs:text-[2rem]" icon="chevron_right" />
    </Link>
  );
};

Category.Header = CategoryHeader;
Category.Preview = CategoryPreview;
