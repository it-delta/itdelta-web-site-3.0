"use client"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const GoogleRecapthaForm = ({ children }) => {

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_VITE_RECAPTCHA_SITE_KEY}>
          { children }
        </GoogleReCaptchaProvider>
    )
}