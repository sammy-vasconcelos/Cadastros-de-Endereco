import { Button } from "./style"

function ConfirmButton(props) {

    return (
      <>
        <Button onClick={props.onClick}>{props.label}</Button>
      </>
    )
  }
  
  export default ConfirmButton
  