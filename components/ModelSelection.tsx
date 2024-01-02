'use client';

import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () =>
  fetch('/api/prompts/engines').then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  return (
    <div>
      <Select
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        onChange={(e) => setModel(e.value)}
        classNames={{
          control: (state) => 'bg-[#434654] border-[#434654]',
        }}
      />
    </div>
  );
}

export default ModelSelection;
