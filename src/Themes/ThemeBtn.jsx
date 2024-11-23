
import { useTheme } from "../contexts/ThemeProvider";

export default function ThemeBtn() {
    
    const {name} = useTheme()

   
    return (
       <h1>Mode IS {name}</h1>
    );
}

