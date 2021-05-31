import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';


const WithRouter: React.FC = ({children}) => {
    const history = createMemoryHistory()
    return (
        <Router history={history}>
            {children}
        </Router>
    )
}

test('renders correct values in the fields and can be submitted', () => {
    const submit = jest.fn()
    render(
        <WithRouter>
            <Form
                form={{
                    login: 'login',
                    password: 'password'
                }}
                onSubmit={submit}
                handleFormChange={() => {}}
                submitting={false}
                openForgotPasswordModal={() => {}}
            />
        </WithRouter>
    )

    expect(screen.getByRole('form')).toHaveFormValues({
        login: 'login',
        password: 'password'
    });

    fireEvent(screen.getByText('Sign In'), new MouseEvent('click'))

    expect(submit).toHaveBeenCalledTimes(1)
});

test("can't submit while submitting", () => {
    const submit = jest.fn()

    render(
        <WithRouter>
            <Form
                form={{
                    login: '123',
                    password: '213'
                }}
                submitting
                onSubmit={submit}
                handleFormChange={() => {}}
                openForgotPasswordModal={() => {}}
            />
        </WithRouter>
    )
    fireEvent(screen.getByText('Sign In'), new MouseEvent('click'))

    expect(submit).not.toHaveBeenCalled();
});
