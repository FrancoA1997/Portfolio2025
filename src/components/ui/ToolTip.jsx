/* ------------------------------Imports---------------------------- */
//Styles
import '../../scss/components/ui/CustomTooltip.scss'
//Components
import { Tooltip } from "radix-ui";
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
//Icons
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */

const CustomToolTip = ({children, content}) => {
  return (
    <Tooltip.Provider >
    <Tooltip.Root>
    <Tooltip.Trigger>      
  {children}
    </Tooltip.Trigger>
    <Tooltip.Portal>
    <Tooltip.Content
    className="customTooltip"
    sideOffset={15}
    alignOffset={100}
>
    <ExclamationTriangleIcon color='orangered'/>
{content}
</Tooltip.Content> 
    </Tooltip.Portal>
    </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default CustomToolTip