import { useState, useRef } from 'react'
import BriefInfo from "../../atoms/BriefInfo/BriefInfo";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { brief } from '../../constants'
import validate from '../../validate'
import './ContactsForm.css';
export default function ContactsForm() {
    const [values, setValues] = useState({});
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
    let orderForm = useRef(null);
    let handleForm = async (e) => {
        e.preventDefault();
        let formData = new FormData(orderForm.current)
        console.log(orderForm.current)
        try {
            const response = await fetch('/send.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form className="contacts-form" ref={orderForm} onSubmit={handleForm}>
            <div className="contacts-form__inputs">
                <div className="input__container">
                    <input name="name" type="text" className="contacts-form__input" placeholder='Имя' onChange={handleChange} value={values.name || ''}></input>
                    {errors.name?<span className='contacts-form__input_error'>{errors.name}</span>:''}
                </div>
                <div className="input__container">
                <input name="telephone" type="text" className="contacts-form__input" placeholder='Телефон'onChange={handleChange} value={values.telephone || ''} ></input>
                    {/* {errors.name?<span className='input__error'>{errors.name}</span>:''} */}
                </div>
                <div className="input__container">
                <input type="email" name='email' className="contacts-form__input" placeholder='E-mail' onChange={handleChange} value={values.email || ''} ></input>
                    {errors.email?<span className='contacts-form__input_error'>{errors.email}</span>:''}
                </div>

                
                
            </div>
            <p className="contacts-form__brief">Напишите в свободной форме о проекте или заполните бриф — мы подберем несколько решений</p>
            <div className="contacts-form__request">
                <textarea className="contacts-form__textarea" placeholder='Опишите Вашу задачу' name='textarea' value={values.textarea || ''} onChange={handleClear}></textarea>
                <div className="brief__info">
                    {brief.map((elem) => (
                        <BriefInfo
                            element={elem}
                        />
                    ))}
                </div>
            </div>
            {/* <button className="contacts-form__add">Прикрепить файл</button> */}
            <Button type="submit" style="start" text='Отправить' />
            <p className="contacts-form__confidence">Заполняя форму, вы соглашаетесь с политикой конфидециальности</p>
        </form>
    )
}