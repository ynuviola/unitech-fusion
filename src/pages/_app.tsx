import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../styles/globals.css';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import LeadCapturePopup from '../components/ui/LeadCapturePopup';
import ChatbotButton from '../components/ui/ChatbotButton';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
      <LeadCapturePopup />
      <ChatbotButton />
    </>
  );
}