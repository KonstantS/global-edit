import React, { useState } from 'react';
import Input from './Input';

const InputPassword: React.FC<React.ComponentPropsWithoutRef<'input'>> = ({type, ...props}) => {
    const [show, setShow] = useState(false)

    return (
        <Input type={show ? 'text' : 'password'} {...props}>
            <button type='button' className='form__button-input' onClick={() => setShow(bool => !bool)}>
                {show ? 'Hide': 'Show'}
            </button>
        </Input>
    );
};

export default InputPassword;
