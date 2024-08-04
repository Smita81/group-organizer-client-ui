import { useGroupOrganizer } from "../context/GroupOrganizerContext";
import "./footer.css"
 
export const Footer = () => {
const { isFontSizeLarge, setFontSize } = useGroupOrganizer();

    return <div className={isFontSizeLarge? "footer large": "footer small"}> 
    
    <p>footer footer footer </p>
        <button type="button" onClick={setFontSize}>set font size</button>
        </div>;
};