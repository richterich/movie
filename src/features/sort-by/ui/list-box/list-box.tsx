import {Listbox, Transition} from '@headlessui/react';
import type {PropsWithChildren} from 'react';
import {Fragment} from 'react';
import {MaterialIcon} from '~/shared/ui/icon';
import type {SortByOption} from '../../model';

interface ListboxProps {
  title: string;
  sortOption: SortByOption;
  setSortOption: (value: SortByOption) => void;
}

interface OptionProps {
  option: SortByOption;
}

export const SortByListbox = ({title, sortOption, children, setSortOption}: PropsWithChildren<ListboxProps>) => {
  return (
    <div title={title} className="relative rounded-md bg-[#111] px-6 py-3 transition-colors duration-300">
      <Listbox value={sortOption} onChange={(option: SortByOption) => setSortOption(option)}>
        <MaterialIcon icon="sort" className="align-middle" />
        <Listbox.Button className="ml-2 w-32 text-left">{sortOption}</Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Listbox.Options className="absolute right-0 top-full z-50 mt-2 w-full origin-top-right rounded-md bg-[#111] p-1">
            {children}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

const SortByOption = ({option}: OptionProps) => {
  return (
    <Listbox.Option
      className="relative cursor-default select-none px-6 py-2 hover:bg-[#1e1e1e]"
      key={option}
      value={option}>
      {({selected}) => (
        <>
          {selected ? <MaterialIcon icon="check_small" className="align-middle" /> : null}
          <span className={selected ? 'font-medium' : 'font-normal'}>{option}</span>
        </>
      )}
    </Listbox.Option>
  );
};

SortByListbox.SortByOption = SortByOption;
