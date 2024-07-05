import { Label } from "./style"

function TextLabel(props) {

    return (
      <>
        <Label 
        color={props.color} 
        weight={props.weight} 
        size={props.size}
        marginbottom={props.marginbottom}
        margintop={props.margintop}
        >{props.label}</Label>
      </>
    )
  }
  
  export default TextLabel