import React, { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import FormGroup from '../UI/FormGroup';
import Label from '../UI/Label';
import Input from '../UI/Input';
import Button from '../UI/Button';
import InputPassword from '../UI/InputPassword';
import { ILoginForm } from '../../types/model/form';

type TFormProps = {
    form: ILoginForm,
    handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: FormEvent) => void,
    openForgotPasswordModal: () => void,
    submitting?: boolean,
}

const LOGIN_FORM_NAME = 'LOGIN_FORM_NAME'
const Form: React.FC<TFormProps> = ({
    form,
    submitting,
    handleFormChange,
    onSubmit,
    openForgotPasswordModal
}) => {
    return (
        <div className='form'>
            <Link to="/">
                <img className='logo' src={logo} alt="logo global edit"/>
            </Link>
            <form className='form__form' onSubmit={onSubmit} name={LOGIN_FORM_NAME}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input required name='login' value={form.login} onChange={handleFormChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <InputPassword required name='password' value={form.password} onChange={handleFormChange}/>
                </FormGroup>
                <FormGroup type='buttons'>
                    <Button
                        disabled={submitting}
                        type='submit'
                        theme='primary'>
                        Sign In
                    </Button>
                    <Button theme='link' type='button' onClick={openForgotPasswordModal}>
                        Forgot password?
                    </Button>
                </FormGroup>
            </form>
        </div>
    );
};

export default Form;
