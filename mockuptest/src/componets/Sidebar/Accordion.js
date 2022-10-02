import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({item}) =>{
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }
      return (
        <>
             <div 
                className={`
                    group hover:bg-gray-300 hover:text-black
                    flex flex-row justify-between w-full text-start
                    ${open ? '' : 'border-b-2'}
                    cursor-pointer py-1
                `}
                onClick={() => handleOpen()}
            >
                <div>
                    <FontAwesomeIcon icon={item.icon} size="sm" />
                    <span className="hidden md:inline mx-4 text-sm">{item.name}</span>
                </div>
                <span className='w-5'>
                    {open ? 
                        <FontAwesomeIcon icon={faChevronRight} size="xs"/>: 
                        <FontAwesomeIcon icon={faChevronDown} size="xs"/>}
                </span>
            </div>
            <div className={`flex flex-col ${open ? 'hidden': ''} pl-2 text-sm border`}>
                {item?.content.map((itm, i) =>{
                    return <div key={i} className="border-b-2 border-gray-300 hover:bg-gray-300">{itm.name}</div>
                })}

            </div>
            
        </>
      )
}

export default Accordion;