import React from 'react'
import { useEffect } from 'react'
import { OrderCard } from './OrderCards/OrderCard'
import s from './OrderForm.module.css'

export const OrderForm = ({
  data,
  firstName,
  firstNameError,
  firstNameDirty,
  deliveryDate,
  deliveryDateError,
  deliveryDateDirty,
  size,
  sizeError,
  sizeDirty,
  follow,
  setFollow,
  email,
  emailError,
  emailDirty,
  agree,
  setAgree,
  dataSaved,
  setDataSaved,
  formValues,
  formValid,
  setFormValid,
  handleSubmin,
  blurHandler,
  firstNameHandler,
  deliveryDateHandler,
  sizeHandler,
  emailHandler,
  currentMonth,
}) => {
  useEffect(() => {
    if (
      firstNameError ||
      deliveryDateError ||
      sizeError ||
      (emailError && follow) ||
      !agree
    ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [firstNameError, deliveryDateError, sizeError, emailError, follow, agree])

  return (
    <div className={s.form_wrapper}>
      <div className={s.cards}>
        <OrderCard formValues={formValues} />
      </div>
      <form className={s.order_form} onSubmit={handleSubmin}>
        <div className={s.order_firstName}>
          <label htmlFor="name">
            Имя:
            <input
              value={firstName}
              placeholder="Введите имя"
              onBlur={(e) => blurHandler(e)}
              type="text"
              name="firstName"
              onChange={(e) => firstNameHandler(e)}
              required
            />
            {firstNameDirty && <div className={s.errors}>{firstNameError}</div>}
          </label>
        </div>
        <div>
          <label htmlFor="deliveryDate">
            Дата доставки:
            <input
              placeholder="yyyy-mm-dd"
              value={deliveryDate}
              onBlur={(e) => blurHandler(e)}
              type="date"
              required
              min={currentMonth()}
              name="deliveryDate"
              onChange={(e) => deliveryDateHandler(e)}
            />
          </label>
          {deliveryDateDirty && (
            <div className={s.errors}>{deliveryDateError}</div>
          )}
        </div>
        <div>
          <label htmlFor="size">
            Размер：
            <select
              value={size}
              onBlur={(e) => blurHandler(e)}
              name="size"
              onChange={(e) => sizeHandler(e)}
            >
              {data.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </label>
          {sizeDirty && <div className={s.errors}>{sizeError}</div>}
        </div>
        <div className={s.toogle_container}>
          <label htmlFor="follow">
            Получать рассылку?
            <input
              type="checkbox"
              checked={follow}
              name="follow"
              className={s.follow}
              onChange={() => setFollow((prev) => !prev)}
            />
          </label>
          {follow && (
            <div>
              <label htmlFor="email">
                Email:
                <input
                  placeholder="Введите емейл"
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  type="email"
                  name="email"
                  onChange={(e) => emailHandler(e)}
                />
              </label>
              {emailDirty && <div className={s.errors}>{emailError}</div>}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="follow">
            Согласие на обработку данных:
            <input
              type="checkbox"
              checked={agree}
              name="follow"
              className={s.agree}
              onChange={() => setAgree((prev) => !prev)}
              onBlur={(e) => blurHandler(e)}
            />
          </label>
        </div>
        <div className={s.form_button}>
          <input
            onClick={() => {
              setDataSaved(true)
              setTimeout(() => {
                setDataSaved(false)
              }, 4000)
            }}
            disabled={!formValid}
            type="submit"
            value="Заказать"
          />
          {dataSaved && <div>Данные сохранены</div>}
        </div>
      </form>
    </div>
  )
}
