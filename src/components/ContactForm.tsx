"use client"
import {useCallback, useId, useState} from "react";
import {Button} from '@/components/Button'
import {FadeIn} from '@/components/FadeIn'
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import Link from 'next/link';

function TextInput({
    label,
    value,
    setValue,
    errorText,
    clearErrors,
    ...props
    }: React.ComponentPropsWithoutRef<'input'> & {
        label: string,
        setValue: any,
        errorText?: string,
        clearErrors?: any
    })
{
  let id = useId()

  return (
      <>
          <div className="group relative z-0 transition-all focus-within:z-10">
              <div className="border border-neutral-300 bg-transparent ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl">
                  <input
                      className="peer block w-full px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                      type="text"
                      id={id}
                      {...props}
                      placeholder=" "

                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onFocus={clearErrors}
                  />
                  <label
                      htmlFor={id}
                      className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                  >
                      {label}
                  </label>
                  <div className="px-6 pt-0 text-sm font-medium text-red-500 text-red-600">{errorText}</div>
              </div>
          </div>
      </>
  )
}

function RadioInput({
    label,
    setValue,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string, setValue: any }) {
  return (
      <label className="flex gap-x-3">
        <input
            type="radio"
            {...props}
            className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            onChange={(e: any) => setValue(e.target.value)}
        />
        <span className="text-base/6 text-neutral-950">{label}</span>
      </label>
  )
}


export function ContactForm() {
  const [errors, setErrors] = useState<any>({});
  const [message, setMessage] = useState<string>();
  const [messageColor, setMessageColor] = useState<string>('text-green-500');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const clearErrors = useCallback(()=>setErrors({}), []);

  const setSuccessMessage = () => {
    setMessageColor('text-green-500');
    setMessage("Заявка успешно отправлена, мы свяжемся с вами в ближайшее время!");
  }

  const setErrorMessage = (e: string) => {
    setMessageColor('text-red-500');
    setMessage("Во время отправки произошла ошибка: " + e);
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setMessage('');
    setErrors({})
    setLoading(true);

    const data1 = {
        title: 'itdelta.ru: Заявка со страницы контакты',
        firstName: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        data: {
            budget: `Бюджет: ${data.budget}`,
            company: `Компания: ${data.company}`
        },
        token: ''
    };

    data1.token = await handleReCaptchaVerify();
    const url = process.env.NEXT_PUBLIC_ORDER_FORM_URL ?? '';
    window.fetch(url, {
          method: "POST",
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(data1),
        })
        .then(res => {
            if (res.ok || res.status === 422) return res.json();
            throw new Error(res.status + ' ' + res.statusText);
        })
        .then(res => {
            res.errors?.recaptcha && setErrorMessage(res.errors.recaptcha);
            res.errors && setErrors(res.errors);
            !res.errors && setSuccessMessage();
        })
        .catch((e) => {
            setErrorMessage(e.message);
        })
        .finally(() => {
          setLoading(false);
        });
  };

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return '';
        }
        try {
            const token = await executeRecaptcha('sendForm');
            console.log('handleReCaptchaVerify: ', token && 'OK');
            return token;
        } catch (error) {
            console.error('recaptcha token error', error);
        }
        return '';
    }, [executeRecaptcha]);

  return (
    <FadeIn className="lg:order-last">
        <form onSubmit={onSubmit}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Оставить заявку
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput label="Имя *" name="name" autoComplete="name" required
               value={data.name}
               setValue={(e:string)=>setData({...data, name: e})}
               errorText={errors.name}
               clearErrors={clearErrors}
            />
            <TextInput
                label="E-mail *"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={data.email}
                setValue={(e:string)=>setData({...data, email: e})}
                errorText={errors.email}
                clearErrors={clearErrors}
            />
            <TextInput
                label="Компания"
                name="company"
                autoComplete="organization"
                value={data.company}
                setValue={(e:string)=>setData({...data, company: e})}
            />
            <TextInput label="Телефон *" type="tel" name="phone" autoComplete="tel" required
               value={data.phone}
               setValue={(e:string)=>setData({...data, phone: e})}
               errorText={errors.phone}
               clearErrors={clearErrors}
            />
            <TextInput label="Сообщение" name="message"
               value={data.message}
               setValue={(e:string)=>setData({...data, message: e})}
            />
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Бюджет</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput label="500K – 1000K" name="budget" value="0.5-1" setValue={(e:string)=>setData({...data, budget: e})}/>
                  <RadioInput label="1М – 3М" name="budget" value="1-3" setValue={(e:string)=>setData({...data, budget: e})}/>
                  <RadioInput label="3М – 10М" name="budget" value="3-10" setValue={(e:string)=>setData({...data, budget: e})}/>
                  <RadioInput label="более 10М" name="budget" value=">10" setValue={(e:string)=>setData({...data, budget: e})}/>
                </div>
              </fieldset>
            </div>
          </div>

            {message && <div className={`text-sm font-medium px-4 mt-10 ${messageColor}`}>
                {message}
            </div>}

            <div className="mt-5 mb-3 text-sm">
              <span>{ `Нажимая кнопку "Отправить", вы даете`} </span>
              <Link
                className="text-md text-red-400 transition hover:text-red-500"
                href={'/policies/agreement.pdf'}
                target="_blank"
              >
                Согласие на обработку персональных данных
              </Link>
            </div>

            <Button type="submit"
                className="mt-2"
                loading={loading}
                disabled={loading}
          >
            Отправить
          </Button>
        </form>
     </FadeIn>
  )
}