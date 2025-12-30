import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';
import { FestivalBlastComponent } from './festival/festival-blast/festival-blast.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { Meta, Title } from '@angular/platform-browser';
import { FestivalService } from './festival/festival.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LandingComponent,
    RealEstateComponent,
    FestivalBlastComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* ================= LANGUAGE ================= */
  lang: 'en' | 'te' | 'hi' = 'en';

  text = {
    en: { title: 'RiseRoots Enterprises' },
    te: { title: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్' },
    hi: { title: 'राइज़रूट्स एंटरप्राइज़ेज़' },
  };

  /* ================= TABS ================= */
  activeTab: 'services' | 'realestate' | 'xyz' = 'services';

  /* ================= FESTIVAL ================= */
  festivalEffect: 'confetti' | 'fireworks' | 'flowers' | 'custom' | null = null;
  festivalMessage?: string;

  constructor(
    private meta: Meta,
    private title: Title,
    private festivalService: FestivalService
  ) {
    this.updateMeta();
    this.setPageTitle();
  }

  ngOnInit(): void {
    const festival = this.festivalService.getTodayFestival();
    if (!festival) return;

    this.festivalEffect = festival.blast ? festival.effect : null;
    this.festivalMessage = festival.messageEnabled
      ? festival.message
      : undefined;
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

  /* ================= META ================= */
  setPageTitle() {
    const titles = {
      en: 'RiseRoots Enterprises',
      te: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్',
      hi: 'राइज़रूट्स एंटरप्राइज़ेज़',
    };
    this.title.setTitle(titles[this.lang]);
  }

  updateMeta() {
    const descriptions = {
      en: 'RiseRoots Enterprises | Farm Lands | Open Plots | Flats',
      te: 'రైజ్‌రూట్స్ | వ్యవసాయ భూములు | ప్లాట్లు | ఫ్లాట్లు',
      hi: 'राइज़रूट्स | फार्म लैंड | प्लॉट्स | फ्लैट्स',
    };

    this.meta.updateTag({
      name: 'description',
      content: descriptions[this.lang],
    });
  }

  /* ================= SECURITY ================= */
  @HostListener('document:contextmenu', ['$event'])
  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
