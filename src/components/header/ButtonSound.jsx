import { useState} from 'react'

const ButtonSound = () => {
    const [isOn, setIsOn] = useState(true)

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <img 
         src={isOn ? "/src/assets/img/soundOn.png" : "/src/assets/img/soundOff.png"}
         alt= "Button Sound On " onClick={handleClick}/>
    );
};
export default ButtonSound;