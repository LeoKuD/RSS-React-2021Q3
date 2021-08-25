import React, { useState } from 'react'
import { OrderForm } from './orderForm'

export const OrderFormContainer = (props) => {
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState(
    'Имя не может быть пустым'
  )
  const [firstNameDirty, setFirstNameDirty] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryDateError, setDeliveryDateError] = useState('Выберите дату')
  const [deliveryDateDirty, setDeliveryDateDirty] = useState(false)
  const [size, setSize] = useState('')
  const [sizeError, setSizeError] = useState('Выберите размер')
  const [sizeDirty, setSizeDirty] = useState(false)
  const [follow, setFollow] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('Введите емайл')
  const [emailDirty, setEmailDirty] = useState(false)
  const [agree, setAgree] = useState(false)
  const [dataSaved, setDataSaved] = useState(false)
  const [formValues, setFormValues] = useState([])
  const [formValid, setFormValid] = useState(false)
  const reset = () => {
    setFirstName('')
    setFirstNameDirty(false)
    setFirstNameError('Имя не может быть пустым')
    setDeliveryDate('')
    setDeliveryDateDirty(false)
    setDeliveryDateError('Выберите дату')
    setSize('')
    setSizeDirty(false)
    setSizeError('Выберите размер')
    setFollow(false)
    setEmail('')
    setEmailDirty(false)
    setEmailError('Введите емейл')
    setAgree(false)
    setFormValid(false)
  }
  const handleSubmin = (event) => {
    event.preventDefault()
    setFormValues((state) => [
      ...state,
      { firstName, deliveryDate, size, follow, email },
    ])
    reset()
  }
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstNameDirty(true)
        break
      case 'deliveryDate':
        setDeliveryDateDirty(true)
        break
      case 'size':
        setSizeDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
      default:
        break
    }
  }
  const firstNameHandler = (e) => {
    setFirstName(e.target.value)
    if (!e.target.value) {
      setFirstNameError('Имя не может быть пустым')
    } else {
      setFirstNameError('')
    }
  }
  const deliveryDateHandler = (e) => {
    setDeliveryDate(e.target.value)
    if (!e.target.value) {
      setDeliveryDateError('Дата не может быть пустой')
    } else {
      setDeliveryDateError('')
    }
  }
  const sizeHandler = (e) => {
    setSize(e.target.value)
    if (!e.target.value) {
      setSizeError('Выбери размер')
    } else {
      setSizeError('')
    }
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!e.target.value) {
      setEmailError('Введите емейл')
    } else if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Введен некорректный емейл')
    } else {
      setEmailError('')
    }
  }
  const currentMonth = () => {
    const today = new Date()
    const month = today.getMonth() + 1
    if (month < 10) {
      const newMonth = `0${month}`
      return `${today.getFullYear()}-${newMonth}-${today.getDate()}`
    }
    return `${today.getFullYear()}-${month}-${today.getDate()}`
  }
  return (
    <>
      <OrderForm
        data={props.data[0].sizes}
        firstName={firstName}
        setFirstName={setFirstName}
        firstNameError={firstNameError}
        setFirstNameError={setFirstNameError}
        firstNameDirty={firstNameDirty}
        setFirstNameDirty={setFirstNameDirty}
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
        deliveryDateError={deliveryDateError}
        setDeliveryDateError={setDeliveryDateError}
        deliveryDateDirty={deliveryDateDirty}
        setDeliveryDateDirty={setDeliveryDateDirty}
        size={size}
        setSize={setSize}
        sizeError={sizeError}
        setSizeError={setSizeError}
        sizeDirty={sizeDirty}
        setSizeDirty={setSizeDirty}
        follow={follow}
        setFollow={setFollow}
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        setEmailError={setEmailError}
        emailDirty={emailDirty}
        setEmailDirty={setEmailDirty}
        agree={agree}
        setAgree={setAgree}
        dataSaved={dataSaved}
        setDataSaved={setDataSaved}
        formValues={formValues}
        setFormValues={setFormValues}
        formValid={formValid}
        setFormValid={setFormValid}
        handleSubmin={handleSubmin}
        blurHandler={blurHandler}
        firstNameHandler={firstNameHandler}
        deliveryDateHandler={deliveryDateHandler}
        sizeHandler={sizeHandler}
        emailHandler={emailHandler}
        currentMonth={currentMonth}
      />
    </>
  )
}
