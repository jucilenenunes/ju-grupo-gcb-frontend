import { ModalStyled } from './styles';

const Modal = ({ title, children, setOpen}) => {
    return (
        <ModalStyled onClick={(e) => { setOpen(false) } }>
            <div onClick={(e) => { e.stopPropagation(); } }>
                <div><h1>{title}</h1></div>
                <div>{children}</div>
            </div>
        </ModalStyled>
    );
}

export default Modal;