import React, { useState } from 'react';
import './ValidationSample.css'

const ValidationSample = () => {

    const box = React.createRef()

    const [form, setForm] = useState({
        password: '',
        clicked : false,
        valiated: false
    })

    const { password, clicked, valiated } = form;

    const onFocus = () => {
        box.current.focus();
    }

    const onChanage = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm)
    }

    const onClick = () => {
        setForm({
            password: password,
            clicked: true,
            valiated: password === '0000'
        });

        box.focus();
    }

    return (
        <div>
            <input
                type="password"
                name="password"
                ref={(ref) => this.box=ref}
                value={password}
                onChange={onChanage}
                className={clicked ? (valiated ? 'success' : 'failure') : ''}
                />
            <button onClick={onClick}>검증하기</button>
        </div>
    );
};

export default ValidationSample;