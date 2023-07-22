import { useEffect, useState } from "react";

const useIsBurger = (boundary = 1000) => {
    const flag = window.innerWidth <= boundary ? true : false
    const [isBurger, setIsBurger] = useState(flag);


    useEffect(() => {
        function handler() {
            if (window.innerWidth <= boundary && isBurger === false) {
                setIsBurger(true);
            } else if (window.innerWidth > boundary && isBurger === true) {
                setIsBurger(false);
            }
        }
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, [boundary, isBurger])
    return isBurger;
};

export default useIsBurger;