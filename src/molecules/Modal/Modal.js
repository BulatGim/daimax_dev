import React, { useState, useEffect, useRef } from "react";
import Button from "../../atoms/Button/Button"
import Input from '../../atoms/Input/Input';
import validate from "../../validate";
import './Modal.css';
export default function Modal(props) {

    const [values, setValues] = useState({});
    const [isDisable, setIsDisable] = useState()
    const [errors, setErrors] = useState({});
    function handleClear(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        const { [name]: removedError, ...rest } = errors;
        const error = validate[name](value);
        setErrors({
            ...rest,
            ...(error && { [name]: values[name] && error }),
        });
    }
    function handleClose(e) {
        if (e.target.getAttribute('data-modal') === 'hide') {
            props.close()
        }
    }
    let orderForm = useRef(null);
    let handleForm = async (e) => {
        e.preventDefault();
        let formData = new FormData(orderForm.current)
        console.log(orderForm.current)
        try {
            props.close()
            const response = await fetch('/send.php', {
                method: 'POST',
                body: formData
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={props.modal ? "modal" : 'modal_disabled'} data-modal='hide' onClick={(e) => handleClose(e)}>
            <div className="modal__container">
                <div className="modal__content">
                    <h1 className="modal__title">Обсудим?</h1>
                    <p className="modal__subtitle">Заполните форму ниже и мы свяжемся с вами в ближайшее время для обсуждения деталей проекта</p>
                    <form className="modal__form" ref={orderForm} onSubmit={handleForm}>
                        <div className="form__inputs">
                            <div className="form__inputs_left">
                                <Input type="text" name='name' placeholder='Ваше имя' handleChange={handleChange} value={values.name || ''} error={errors.name} />
                                <Input type="text" name='telephone' placeholder='Телефон' handleChange={handleClear} value={values.telephone || ''} />
                                <Input type="email" name='email' placeholder='Email' handleChange={handleChange} value={values.email || ''} error={errors.email} />
                            </div>
                            <textarea className="form__input" name='textarea' placeholder='Ваши пожелания' onChange={handleClear} value={values.textarea || ''} />
                        </div>
                        <div className="form__buttons">
                            <Button type="submit" width="100%" style="start" text='Отправить' disabled={!(Object.keys(errors).length == 0 && !Object.values(values).length == 0)}  />
                            <p className="modal__confidence">Заполняя форму, вы соглашаетесь с политикой конфидециальности</p>
                        </div>

                    </form>
                </div>
                <button className="modal__button_close" onClick={props.close}></button>
            </div>
        </div>
    )
}