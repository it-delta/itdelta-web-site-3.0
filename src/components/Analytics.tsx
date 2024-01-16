"use client";
import { YandexMetricaProvider } from 'next-yandex-metrica';

export const Analytics = (props: any) => (
    <YandexMetricaProvider {...props}>{props.children}</YandexMetricaProvider>
);