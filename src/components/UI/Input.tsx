import React from 'react';
import cx from 'classnames';


type TInputProps = {
    theme?: 'light',
} & React.ComponentPropsWithoutRef<'input'>

const Input: React.FC<TInputProps> = ({theme, children, ...props}) => {
    return (
        <div className='form__input-container'>
            <input {...props} className={cx('form__input', {
                'form__input--light': theme === 'light'
            })} />
            {children}
        </div>
    );
};

export default Input;
