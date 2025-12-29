import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';
import { FestivalBlastComponent } from './festival/festival-blast/festival-blast.component';

import { Meta, Title } from '@angular/platform-browser';

/* CONFIG */
import { CONTACT_CONFIG } from './config/contact.config';

/* SERVICES */
import { ContactActionsService } from './services/contact-actions.service';
import { FestivalService } from './festival/festival.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LandingComponent, RealEstateComponent, FestivalBlastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* ================= CONTACT DATA ================= */
  contactConfig = CONTACT_CONFIG;

  /* ================= FESTIVAL STATE ================= */
  festivalEffect: 'confetti' | 'fireworks' | 'flowers' | 'custom' | null = null;
  festivalMessage?: string;
  showHeaderEffect = false;

  /* ================= LANGUAGE ================= */
  lang: 'en' | 'te' | 'hi' = 'en';

  text: any = {
    en: { title: 'RiseRoots Enterprises', tagline: '' },
    te: { title: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్', tagline: '' },
    hi: { title: 'राइज़रूट्स एंटरप्राइज़ेज़', tagline: '' },
  };

  /* ================= TABS ================= */
  activeTab: 'services' | 'realestate' | 'xyz' = 'services';

  constructor(
    private meta: Meta,
    private title: Title,
    public contactActions: ContactActionsService,
    private festivalService: FestivalService
  ) {
    this.updateMeta();
    this.setPageTitle();
  }

  ngOnInit(): void {
    const festival = this.festivalService.getTodayFestival();
    if (!festival) return;

    this.festivalEffect = festival.blast ? festival.effect : null;
    this.showHeaderEffect = !!festival.headerEffect;
    this.festivalMessage = festival.messageEnabled ? festival.message : undefined;
  }

  switchLang(language: 'en' | 'te' | 'hi') {
    this.lang = language;
    this.updateMeta();
    this.setPageTitle();
  }

  switchTab(tab: 'services' | 'realestate' | 'xyz') {
    this.activeTab = tab;
  }

  setPageTitle() {
    const titles = {
      en: 'RiseRoots Enterprises | Real Estate Consultants',
      te: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ | రియల్ ఎస్టేట్ కన్సల్టెంట్స్',
      hi: 'राइज़रूट्स एंटरप्राइज़ेज़ | रियल एस्टेट कंसल्टेंट्स',
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

  @HostListener('document:contextmenu', ['$event'])
  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
