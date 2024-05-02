import { ReactNode } from "react";
import './modal-header.scss'

export interface ModalHeaderProps {
    title: ReactNode;
    description?: string;
    [key: string]: any;

}


export const ModalHeader = ({title, description, ...otherProps}: ModalHeaderProps) => {
    return(
        <header {...otherProps} className="modal-header">
            {
                typeof title === "string"
                    ? <h3 className="modal-title">{title}</h3>
                    : title
            }
            {description && <p className="modal-description">{description}</p>}
        </header>
    )
    
}