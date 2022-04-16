import * as yup from 'yup'


export const SignUpSchema = yup.object().shape({
    firstName: yup
        .string()
        .max(25, "İsim alanı en fazla 25 karakter olabilir!")
        .required("İsim alanı zorunludur!"),
    lastName: yup
        .string()
        .max(25, "Soyisim alanı en fazla 25 karakter olabilir!")
        .required("Soyisim alanı zorunludur!"),
    email: yup
        .string()
        .email("E-Mail formatı uygun değildir!")
        .required("E-Mail alanı zorunludur!"),
    userName: yup
        .string()
        .typeError("Sadece @/./-/_ özel karakterlerini kullanabilrsin!")
        .max(20, "Kullanıcı Adı en fazla 20 karakter olabilir!")
        .required("Kullanıcı Adı alanı zorunludur!"),
    password: yup
        .string()
        .typeError("Sadece @/./-/_/*/+ özel karakterlerini kullanabilrsin!")
        .min(6, "Şifre en az 6 karakter olmalıdır!")
        .max(20, "Şifre en fazla 20 karakter olmalıdır!")
        .required("Şifre alanı zorunludur!"),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], "Şifreler aynı olmalıdır!")
        .required("Şifreler aynı olmalıdır!"),
    confirmCheck: yup
        .boolean()
        .oneOf([true], "Sözleşmeyi kabul etmelisiniz!")
})