"use client"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const GoogleRecapthaForm = ({ children }) => {

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.VITE_RECAPTCHA_SITE_KEY}>
          { children }
        </GoogleReCaptchaProvider>
    )
}