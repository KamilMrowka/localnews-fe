import React, { useState, useEffect } from 'react';

const suggestions = ["Apple", "Banana", "ban", "banny", "bansiof", "banfaos", "banafofyho", "Cherry", "Date", "Elderberry"];

const AutoCompleteInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    if (inputValue.length >= 3) {
      setFilteredSuggestions(
        suggestions.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      setInputValue(filteredSuggestions[activeIndex]);
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer ${
                index === activeIndex ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;