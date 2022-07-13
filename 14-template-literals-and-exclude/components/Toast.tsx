// "left-center" | "left-top" | "left-bottom" | "center-center" | "center-top"
//  | "center-bottom" | "right-center" | "right-top" | "right-bottom"

type HorizationPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position:`${HorizationPosition}-${VerticalPosition}`
}

export const Toast = ({position}:ToastProps) => {
    return <div>Toast Notification Position - {position}</div>   
}