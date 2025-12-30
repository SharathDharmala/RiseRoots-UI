import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CONTACT_CONFIG,
  PhoneContact,
  EmailContact,
} from '../../config/contact.config';

import { ContactActionsService } from '../../services/contact-actions.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  /* ================= LANGUAGE ================= */
  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  /* ================= CONTACT DATA ================= */
  phones: PhoneContact[] = CONTACT_CONFIG.phones ?? [];

  emails: EmailContact[] = (CONTACT_CONFIG.emails ?? []).filter(
    (e) => e.visibleInUI !== false
  );

  constructor(public contactActions: ContactActionsService) {}

  /* ================= PHONE + WHATSAPP ================= */
  get groupedContacts(): {
    value: string;
    phone: PhoneContact;
  }[] {
    return this.phones.map((p) => ({
      value: p.value,
      phone: p,
    }));
  }
}
