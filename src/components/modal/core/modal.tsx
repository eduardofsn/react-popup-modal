import { ReactNode, SyntheticEvent } from "react"
import './modal.scss';

export interface ModalProps{
    children: ReactNode,
    size?: "small" | "large" | "medium",
    onOutsideClick?: () => void;
    [key: string]: any;
}

export const Modal = ({children, onOutsideClick, visible = true, size = "medium", ...otherProps}: ModalProps) => {

    const handleOutsideClick = (event: SyntheticEvent<HTMLDivElement>) => {
        if(
            typeof onOutsideClick === 'function' && 
            (event.target as Element).className === 'modal-container') {
            onOutsideClick();
        }
    }

    return(
        <div className="modal-container" onClick={handleOutsideClick}>
            <dialog {...otherProps} className={`modal $(size)`}>
                {children}
            </dialog>
        </div>
    )
    
}