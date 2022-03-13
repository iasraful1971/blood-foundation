import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
const Back = () => {
   const { y : pageYOffset} = useWindowScroll();
   const [visible, setVisible] = useState(false);

    useEffect(() => {
            if(pageYOffset > 400){
                    setVisible(true)
            }else{
                setVisible(false)
            }
    }, [pageYOffset]);
    
const scrollToTop = () => window.scrollTo({
    top:0, behavior: "smooth"
})
   if(!visible){
        return false;
   }

    return (
        <div className="scroll-top" onClick={scrollToTop}>
            <KeyboardArrowUpIcon className='icon' />
        </div>
    );
};

export default Back;