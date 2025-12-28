import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.services';

@Injectable({ providedIn: 'root' })
export class ContactActionsService {

  constructor(private analytics: AnalyticsService) {}

  call(phone: string, source: string) {
    this.analytics.trackEvent('call_click', {
      event_category: 'contact',
      event_label: source,
      phone_number: phone
    });
  }

  whatsapp(phone: string, source: string) {
    this.analytics.trackEvent('whatsapp_click', {
      event_category: 'contact',
      event_label: source,
      phone_number: phone
    });
  }
}
