import React, { useState } from 'react';
function InputTags() {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const newValue = inputValue.trim();
            if (newValue) {
                setTags([...tags, newValue]);
                setInputValue('');
            }
        } else if (event.key === 'Backspace' && !inputValue) {
            // event.preventDefault();
            // setTags(tags.slice(0, -1));
        }
    };

    const handleRemoveTag = (index) => {
        // Remove the tag at the specified index
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-wrap items-center rounded-md py-2 px-3">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="inline-flex gap-1 items-center bg-gray-100 text-gray-800 rounded-full text-sm font-medium py-0.5 px-2 mr-2 mt-1"                >
                    {tag}
                    <button className='p-1' onClick={() => handleRemoveTag(index)}>
                        <svg width="11" height="11" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 0.516551C21.3458 0.362045 21.1627 0.239466 20.961 0.15583C20.7594 0.0721945 20.5433 0.0291441 20.325 0.0291441C20.1067 0.0291441 19.8906 0.0721945 19.689 0.15583C19.4873 0.239466 19.3042 0.362045 19.15 0.516551L11 8.64988L2.85 0.499884C2.6957 0.345581 2.51251 0.223181 2.3109 0.139673C2.1093 0.0561643 1.89322 0.0131836 1.675 0.0131836C1.45678 0.0131836 1.2407 0.0561643 1.03909 0.139673C0.837486 0.223181 0.654302 0.345581 0.499999 0.499884C0.345695 0.654187 0.223295 0.837372 0.139787 1.03898C0.0562788 1.24059 0.013298 1.45667 0.013298 1.67488C0.013298 1.8931 0.0562787 2.10918 0.139787 2.31079C0.223295 2.5124 0.345695 2.69558 0.499999 2.84988L8.65 10.9999L0.499999 19.1499C0.345695 19.3042 0.223295 19.4874 0.139787 19.689C0.0562788 19.8906 0.013298 20.1067 0.013298 20.3249C0.013298 20.5431 0.0562788 20.7592 0.139787 20.9608C0.223295 21.1624 0.345695 21.3456 0.499999 21.4999C0.654302 21.6542 0.837486 21.7766 1.03909 21.8601C1.2407 21.9436 1.45678 21.9866 1.675 21.9866C1.89322 21.9866 2.1093 21.9436 2.3109 21.8601C2.51251 21.7766 2.6957 21.6542 2.85 21.4999L11 13.3499L19.15 21.4999C19.3043 21.6542 19.4875 21.7766 19.6891 21.8601C19.8907 21.9436 20.1068 21.9866 20.325 21.9866C20.5432 21.9866 20.7593 21.9436 20.9609 21.8601C21.1625 21.7766 21.3457 21.6542 21.5 21.4999C21.6543 21.3456 21.7767 21.1624 21.8602 20.9608C21.9437 20.7592 21.9867 20.5431 21.9867 20.3249C21.9867 20.1067 21.9437 19.8906 21.8602 19.689C21.7767 19.4874 21.6543 19.3042 21.5 19.1499L13.35 10.9999L21.5 2.84988C22.1333 2.21655 22.1333 1.14988 21.5 0.516551Z" fill="#9CA3AF" />
                        </svg>
                    </button>
                </span>
            ))}
            {!toggle && (
                <div onClick={() => setToggle(!toggle)} className='text-sm cursor-pointer font-medium py-0.5 px-2 mr-2 mt-1 shadow rounded-full flex justify-center items-center gap-1 text-[#1E9CEF]'>
                    Add Tag
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11V6M6 6V1M6 6L11 6M6 6H1" stroke="#1E9CEF" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            )}
            {toggle && (
                <span className='flex justify-center items-center relative pl-3 pr-3'>
                    <input
                        className='z-10 border-none focus:ring-0 text-sm p-0.5 mt-1 w-60'
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder="Type to add your tag"
                    />
                    <svg className='cursor-pointer mt-1 z-10' onClick={() => setToggle(!toggle)} width="11" height="11" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 0.516551C21.3458 0.362045 21.1627 0.239466 20.961 0.15583C20.7594 0.0721945 20.5433 0.0291441 20.325 0.0291441C20.1067 0.0291441 19.8906 0.0721945 19.689 0.15583C19.4873 0.239466 19.3042 0.362045 19.15 0.516551L11 8.64988L2.85 0.499884C2.6957 0.345581 2.51251 0.223181 2.3109 0.139673C2.1093 0.0561643 1.89322 0.0131836 1.675 0.0131836C1.45678 0.0131836 1.2407 0.0561643 1.03909 0.139673C0.837486 0.223181 0.654302 0.345581 0.499999 0.499884C0.345695 0.654187 0.223295 0.837372 0.139787 1.03898C0.0562788 1.24059 0.013298 1.45667 0.013298 1.67488C0.013298 1.8931 0.0562787 2.10918 0.139787 2.31079C0.223295 2.5124 0.345695 2.69558 0.499999 2.84988L8.65 10.9999L0.499999 19.1499C0.345695 19.3042 0.223295 19.4874 0.139787 19.689C0.0562788 19.8906 0.013298 20.1067 0.013298 20.3249C0.013298 20.5431 0.0562788 20.7592 0.139787 20.9608C0.223295 21.1624 0.345695 21.3456 0.499999 21.4999C0.654302 21.6542 0.837486 21.7766 1.03909 21.8601C1.2407 21.9436 1.45678 21.9866 1.675 21.9866C1.89322 21.9866 2.1093 21.9436 2.3109 21.8601C2.51251 21.7766 2.6957 21.6542 2.85 21.4999L11 13.3499L19.15 21.4999C19.3043 21.6542 19.4875 21.7766 19.6891 21.8601C19.8907 21.9436 20.1068 21.9866 20.325 21.9866C20.5432 21.9866 20.7593 21.9436 20.9609 21.8601C21.1625 21.7766 21.3457 21.6542 21.5 21.4999C21.6543 21.3456 21.7767 21.1624 21.8602 20.9608C21.9437 20.7592 21.9867 20.5431 21.9867 20.3249C21.9867 20.1067 21.9437 19.8906 21.8602 19.689C21.7767 19.4874 21.6543 19.3042 21.5 19.1499L13.35 10.9999L21.5 2.84988C22.1333 2.21655 22.1333 1.14988 21.5 0.516551Z" fill="#9CA3AF" />
                    </svg>
                    <span className='w-full rounded shadow h-auto pb-2 top-0 absolute -z-0'>
                        <hr className='mt-7'></hr>
                        <p className='pl-[14px] text-gray-400 text-xs'>
                            Select an option or create one</p>
                        <div className='pt-2 pl-[14px] grid grid-rows-1 gap-2'>
                            {tags.map((tag, index) => (
                                <span className='gap-3 flex justify-start items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                        <path d="M2.1998 2.8C1.42661 2.8 0.799805 2.1732 0.799805 1.4C0.799805 0.626801 1.42661 0 2.1998 0C2.973 0 3.5998 0.626801 3.5998 1.4C3.5998 2.1732 2.973 2.8 2.1998 2.8ZM2.1998 8.4C1.42661 8.4 0.799805 7.7732 0.799805 7C0.799805 6.2268 1.42661 5.6 2.1998 5.6C2.973 5.6 3.5998 6.2268 3.5998 7C3.5998 7.7732 2.973 8.4 2.1998 8.4ZM2.1998 14C1.42661 14 0.799805 13.3732 0.799805 12.6C0.799805 11.8268 1.42661 11.2 2.1998 11.2C2.973 11.2 3.5998 11.8268 3.5998 12.6C3.5998 13.3732 2.973 14 2.1998 14ZM7.7998 2.8C7.02661 2.8 6.3998 2.1732 6.3998 1.4C6.3998 0.626801 7.02661 0 7.7998 0C8.573 0 9.1998 0.626801 9.1998 1.4C9.1998 2.1732 8.573 2.8 7.7998 2.8ZM7.7998 8.4C7.02661 8.4 6.3998 7.7732 6.3998 7C6.3998 6.2268 7.02661 5.6 7.7998 5.6C8.573 5.6 9.1998 6.2268 9.1998 7C9.1998 7.7732 8.573 8.4 7.7998 8.4ZM7.7998 14C7.02661 14 6.3998 13.3732 6.3998 12.6C6.3998 11.8268 7.02661 11.2 7.7998 11.2C8.573 11.2 9.1998 11.8268 9.1998 12.6C9.1998 13.3732 8.573 14 7.7998 14Z" fill="#526581" />
                                    </svg>
                                    <span
                                        key={index}
                                        className="inline-flex gap-3 items-center bg-gray-100 text-gray-800 rounded-full text-sm font-medium px-2"                >
                                        {tag}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </span>
                </span>
            )}
        </div>
    );
}

export default InputTags;
