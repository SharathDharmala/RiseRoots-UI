import { Injectable } from '@angular/core';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  trackEvent(eventName: string, params: Record<string, any>) {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  }

  trackCall(source: string, phone: string) {
    this.trackEvent('call_click', {
      event_category: 'contact',
      event_label: source,
      phone_number: phone
    });
  }

  trackWhatsApp(source: string, phone: string) {
    this.trackEvent('whatsapp_click', {
      event_category: 'contact',
      event_label: source,
      phone_number: phone
    });
  }
}
