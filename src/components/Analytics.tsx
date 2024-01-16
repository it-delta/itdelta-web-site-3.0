"use client";
import { YandexMetricaProvider } from 'next-yandex-metrica';

export const Analytics = ({ children }) => (
    <YandexMetricaProvider>{children}</YandexMetricaProvider>
);