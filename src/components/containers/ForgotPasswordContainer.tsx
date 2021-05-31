import React, { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import Button from '../UI/Button';
import FormGroup from '../UI/FormGroup';
import Label from '../UI/Label';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/actions/forgotPasswordForm';


const FORM_ID = 'FORGOT_PASSWORD_FORM_ID'

const ForgotPasswordContainer: React.FC<{onClose: () => void}> = ({onClose}) => {
    const dispatch = useDispatch()
    const {loading, success} = useAppSelector(state => state.forgotPasswordForm)
    const [email, setEmail] = useState('')

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }, [setEmail])

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        dispatch(actionCreators.forgotPasswordSubmit(email))
    }, [dispatch, email])

    const handleClose = useCallback(() => {
        dispatch(actionCreators.forgotPasswordSubmitReset())
        onClose()
    }, [dispatch, onClose])

    const modalContent: {
        titleSlot: React.ReactNode,
        children: React.ReactNode,
        footerSlot?: React.ReactNode,
    } = useMemo(() => {
        if (success) {
            return {
                titleSlot: 'Email sent',
                children: (
                    <p>
                        Thank you, instructions to reset your password have been e-mailed to the address you provided!
                    </p>
                )
            }
        }

        return {
            titleSlot: 'Password Reset',
            children: (
                <>
                    <p>
                        Thank you, instructions to reset your password have been e-mailed to the address you provided!
                    </p>
                    <form onSubmit={handleSubmit} id={FORM_ID}>
                        <FormGroup>
                            <Label>Email Address</Label>
                            <Input
                                type='email'
                                required
                                theme='light'
                                onChange={handleEmailChange}
                                value={email}
                                disabled={loading}
                            />
                        </FormGroup>
                    </form>
                </>
            ),
            footerSlot: (
                <>
                    <Button theme='primary' type='submit' disabled={loading} form={FORM_ID}>Submit</Button>
                    <Button theme='cancel' onClick={handleClose}>Cancel</Button>
                </>
            )
        }
    }, [success, handleClose, handleSubmit, loading, handleEmailChange, email])

    return (
        <Modal
            titleSlot={modalContent.titleSlot}
            footerSlot={modalContent.footerSlot}
            onClose={handleClose}
        >
            {modalContent.children}
        </Modal>
    );
};

export default ForgotPasswordContainer;
