import React from 'react';

const Label: React.FC<React.ComponentPropsWithoutRef<'label'>> = ({children, ...props }) => {
    return (
        <label {...props} className='form__label'>
            {children}
        </label>
    );
};

export default Label;
