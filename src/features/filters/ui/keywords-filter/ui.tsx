interface Props {
  keywords: string[];
  setFilter: (values: string[]) => void;
  clearFilter: () => void;
}

export const KeywordsFilter = ({keywords, setFilter, clearFilter}: Props) => {
  console.log('Handlers:', setFilter, clearFilter);

  return (
    <div className="flex">
      <input
        className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
        type="text"
        name="keywords"
        id="keywords"
        placeholder="Action,Comedy,Horror, ..."
        value={keywords.join(',')}
        onChange={() => {}}
      />
    </div>
  );
};
