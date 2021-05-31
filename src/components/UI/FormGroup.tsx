import React from 'react';
import cx from 'classnames';


type TFormGroupProps = {
    type?: 'buttons'
}
const FormGroup: React.FC<TFormGroupProps> = ({children, type}) => {
    return (
        <div className={
            cx('form__group', {
                'form__group--buttons': type === 'buttons'
            })
        }>
            {children}
        </div>
    );
};

export default FormGroup;
