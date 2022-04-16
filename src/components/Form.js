import React from 'react'
import FormInput from './Form/FormInput'
import FormCheckBox from './Form/FormCheckBox'

function Form({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
}) {
    return (
        <form>
            <div className="formTop">
                <FormInput
                    inputValue={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    touched={touched.firstName}
                    className={"nameBox"}
                    label={"İSİM"}
                    inputClass={"firstname"}
                    placeHolder={"İsminizi giriniz"}
                    name={"firstName"}
                />
                <FormInput
                    inputValue={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName}
                    touched={touched.lastName}
                    className={"lastnameBox"}
                    label={"SOYİSİM"}
                    inputClass={"lastname"}
                    placeHolder={"Soyisminizi giriniz"}
                    name={"lastName"}
                />
            </div>
            <div className="formMiddle">
                <FormInput
                    inputValue={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                    label={"E-POSTA"}
                    placeHolder={"E-posta adresinizi giriniz"}
                    type={"email"}
                    name={"email"}
                />
                <FormInput
                    inputValue={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.userName}
                    touched={touched.userName}
                    label={"KULLANICI ADI"}
                    placeHolder={"Kullanıcı adınızı giriniz"}
                    name={"userName"}
                />
                <FormInput
                    inputValue={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                    label={"ŞİFRE"}
                    placeHolder={"Şifrenizi giriniz"}
                    name={"password"}
                />
                <FormInput
                    inputValue={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.passwordConfirm}
                    touched={touched.passwordConfirm}
                    label={"ŞİFRE TEKRAR GİR"}
                    placeHolder={"Şifrenizi doğrulayınız"}
                    name={"passwordConfirm"}
                />
            </div>
            <div className="checkBox">
                <FormCheckBox
                    inputValue={values.confirmCheck}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.confirmCheck}
                    touched={touched.confirmCheck}
                    label={"Sözleşmeyi kabul ediyorum"}
                    name={"confirmCheck"}
                />
            </div>
            <button type="submit" onClick={handleSubmit} >KAYIT OL</button>
        </form>
    )
}

export default Form