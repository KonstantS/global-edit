import React from 'react';
import cx from 'classnames'

type IButtonProps = {
    theme: 'primary' | 'cancel' | 'link'
} & React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<IButtonProps> = ({theme, children, ...props}) => {
    return (
        <button {...props} className={cx('button', {
            'button--primary': theme === 'primary',
            'button--cancel': theme === 'cancel',
            'button--link': theme === 'link'
        })}>
            {children}
        </button>
    );
};

export default Button;
