import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Form from '../layout/Form';
import { useDispatch } from 'react-redux';
import { actionCreators as formActionCreators } from '../../redux/actions/signInform';
import { useAppSelector } from '../../redux/hooks';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import { ILoginForm } from '../../types/model/form';

const FormContainer = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState<ILoginForm>({
        login: '',
        password: ''
    })
    const [isOpenModal, setIsOpenModal] = useState(false)
    const {loading} = useAppSelector(state => state.loginForm)

    const handleFormChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setForm(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }, [setForm])

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        dispatch(formActionCreators.handleSignIn(form))
    }, [dispatch, form])

    const openForgotPasswordModal = useCallback(() => {
        setIsOpenModal(true)
    }, [])

    return (
        <>
            <Form
                submitting={loading}
                form={form}
                handleFormChange={handleFormChange}
                onSubmit={handleSubmit}
                openForgotPasswordModal={openForgotPasswordModal}
            />
            {isOpenModal && <ForgotPasswordContainer onClose={() => setIsOpenModal(false)}/>}
        </>
    );
}

export default FormContainer;
