'use client';

import { PlusIcon } from '@heroicons/react/20/solid';
const setLocalStorage = (prefecture: string) => {
  const pref = localStorage.getItem('prefecture');
  if (pref) {
    const prefArray = pref.split(',');
    if (!prefArray.includes(prefecture)) {
      prefArray.push(prefecture);
      localStorage.setItem('prefecture', prefArray.join(','));
    }
  } else {
    localStorage.setItem('prefecture', prefecture);
  }
};

// react componentを作成
const SetStorage = ({ params }: { params: { prefecture: string } }) => {
  return (
    <button
      type="button"
      className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => {
        setLocalStorage(params.prefecture);
      }}
    >
      <PlusIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default SetStorage;
