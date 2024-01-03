import {Dialog, Transition} from '@headlessui/react';
import type {PropsWithChildren} from 'react';
import {useContext, Fragment} from 'react';
import {FlexibleIconButton} from '~/shared/ui/buttons';
import {FilterPopupContext} from '../../model';

interface PopupProps {
  onPopupClose: () => void;
}

interface SectionProps {
  name: string;
}

export const FilterPopup = ({onPopupClose, children}: PropsWithChildren<PopupProps>) => {
  const isOpen = useContext(FilterPopupContext);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onPopupClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="relative w-full max-w-2xl transform rounded-lg bg-[#111] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-semibold">
                  Filters
                </Dialog.Title>

                <div className="mt-2 max-h-[640px] overflow-y-auto">{children}</div>

                <div className="absolute -top-12 right-0 rounded-full p-2.5 transition-colors duration-300 hover:bg-white/10">
                  <FlexibleIconButton
                    text="Close Filters Dialog"
                    className="align-middle"
                    icon="close"
                    handler={onPopupClose}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const FilterSection = ({name, children}: PropsWithChildren<SectionProps>) => {
  return (
    <section>
      <div className="my-2 border-b border-b-[#1e1e1e] pb-4">
        <h4 className="font-semibold uppercase text-fuchsia-700">{name}</h4>
        {children}
      </div>
    </section>
  );
};

FilterPopup.FilterSection = FilterSection;
