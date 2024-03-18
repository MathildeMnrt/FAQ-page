import React, { useState } from 'react';

const Collapse = ({ title, text, open }) => {
    const [isCollapsed, setIsCollapsed] = useState(!open);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`${isCollapsed ?
            'text-grey-300' :
            'text-white bg-grey-200 bg-opacity-10 py-[28px]'
            }  rounded-xl mt-[28px] flex flex-col gap-[8px] w-auto md:w-[746px] px-[32px] mx-10`}
            onClick={handleToggle}
        >
            <div className="flex flex-row items-center justify-between" >
                <h3 className={`${isCollapsed ? 'text-grey-300' : 'text-white '
                    } `} >{title}</h3>
                <img
                    src="dropdown-icon.png"
                    alt="Collapse/Expand Icon"
                    className={`w-3 h-2  fill-white justify-self-end transform ${isCollapsed ? 'rotate-0' : 'rotate-180'
                        }`}
                />
            </div>
            {!isCollapsed && <p className='text-grey-200 font-light'>{text}</p>}
        </div >
    );
};

export default Collapse;
