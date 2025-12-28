import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';

import { Meta, Title } from '@angular/platform-browser';

/* CONFIG */
import { CONTACT_CONFIG, ContactItem } from './config/contact.config';

/* SERVICES */
import { ContactActionsService } from './services/contact-actions.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LandingComponent, RealEstateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /* ================= CONTACT DATA ================= */
  contacts: ContactItem[] = CONTACT_CONFIG;

  /* ================= LANGUAGE ================= */
  lang: 'en' | 'te' | 'hi' = 'en';

  text: any = {
    en: { title: 'RiseRoots Enterprises' },
    te: { title: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్' },
    hi: { title: 'राइज़रूट्स एंटरప్రైज़ेज़' },
  };

  /* ================= TABS ================= */
  activeTab: 'services' | 'realestate' | 'xyz' = 'services';

  /* ================= CONSTRUCTOR (ONLY ONE) ================= */
  constructor(
    private meta: Meta,
    private title: Title,
    public contactActions: ContactActionsService
  ) {
    this.updateMeta();
    this.setPageTitle();
  }

  /* ================= LANGUAGE ================= */
  switchLang(language: 'en' | 'te' | 'hi') {
    this.lang = language;
    this.updateMeta();
    this.setPageTitle();
  }

  /* ================= TABS ================= */
  switchTab(tab: 'services' | 'realestate' | 'xyz') {
    this.activeTab = tab;
  }

  /* ================= PAGE TITLE ================= */
  setPageTitle() {
    const titles = {
      en: 'RiseRoots Enterprises | Real Estate Consultants',
      te: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ | రియల్ ఎస్టేట్',
      hi: 'राइज़रूट्स एంటర్‌प्रైజెస్ | रियल एस्टेट',
    };

    this.title.setTitle(titles[this.lang]);
  }

  updateMeta() {
    const descriptions: any = {
      en: 'RiseRoots Enterprises | Farm Lands | Open Plots | Flats',
      te: 'రైజ్‌రూట్స్ | వ్యవసాయ భూములు | ప్లాట్లు | ఫ్లాట్లు',
      hi: 'राइज़रूट्स | फार्म लैंड | प्लॉट्स | फ्लैट्स',
    };

    this.meta.updateTag({
      name: 'description',
      content: descriptions[this.lang],
    });
  }

  /* ================= CONTACT HELPERS ================= */

  get groupedContacts(): {
    value: string;
    phone?: ContactItem;
    whatsapp?: ContactItem;
  }[] {
    const map = new Map<
      string,
      { value: string; phone?: ContactItem; whatsapp?: ContactItem }
    >();

    for (const c of this.contacts) {
      if (c.type === 'phone' || c.type === 'whatsapp') {
        if (!map.has(c.value)) {
          map.set(c.value, { value: c.value });
        }
        map.get(c.value)![c.type] = c;
      }
    }

    return Array.from(map.values());
  }

  get emailContacts(): ContactItem[] {
    return this.contacts.filter((c) => c.type === 'email');
  }

  /* ================= SECURITY ================= */
  @HostListener('document:contextmenu', ['$event'])
  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
