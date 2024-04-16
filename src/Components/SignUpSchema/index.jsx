import * as Yup from 'yup'
export const signUpSchema=Yup.object({
    email:Yup.string().required("Please enter your email"),
    password:Yup.string().max(15).required("Please enter your password"),
})
export const signInSchema=Yup.object({
    email:Yup.string().required("Please enter your email"),
    password:Yup.string().min(6).required("Your password length must be 6 words"),
})
export const emailModalSchema=Yup.object({
    email:Yup.string().min(6).required("Please enter your email")
})