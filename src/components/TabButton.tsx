import React from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export default function TabButton({ active, selectTab, children }: TabButtonProps) {
  const buttonClass = active ? 'text-white border-b border-rose-300' : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
}

