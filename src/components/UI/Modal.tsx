import React from 'react';


type TModalProps = {
    titleSlot: React.ReactNode,
    footerSlot?: React.ReactNode,
    onClose: () => void,
}
const Modal: React.FC<TModalProps> = ({
    titleSlot,
    footerSlot,
    onClose,
    children
}) => {
    return (
        <div className='modal' aria-modal>
            <div className='modal__header'>
                {titleSlot}
                <button className='modal__close-button' onClick={onClose} />
            </div>
            <div className='modal__content'>
                {children}
            </div>
            {footerSlot && (
                <div className='modal__footer'>
                    {footerSlot}
                </div>
            )}
        </div>
    );
};

export default Modal;
