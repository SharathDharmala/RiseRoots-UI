import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FestivalBlastComponent } from './festival/festival-blast/festival-blast.component';

import { Meta, Title } from '@angular/platform-browser';
import { FestivalService } from './festival/festival.service';
import { LanguageService, AppLang } from './services/language.service';
import { LandingComponent } from './pages/ourservices/ourservices.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, FestivalBlastComponent,LandingComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /** 🌐 Global language */
  lang: AppLang = 'en';

  /** 🎉 Festival */
  festivalEffect: 'confetti' | 'fireworks' | 'flowers' | null = null;
  festivalMessage?: string;

  constructor(
    private langService: LanguageService,
    private meta: Meta,
    private title: Title,
    private festivalService: FestivalService
  ) {
    /* 🔹 Language subscription */
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
      this.setTitle();
    });

    this.updateMeta();
  }

  ngOnInit(): void {
    const festival = this.festivalService.getTodayFestival();
    if (!festival) return;

    this.festivalEffect = festival.blast
      ? (festival.effect as 'confetti' | 'fireworks' | 'flowers')
      : null;

    this.festivalMessage = festival.messageEnabled ? festival.message : undefined;
  }

  /** 🔁 Language change from header */
  onLangChange(lang: AppLang) {
    this.langService.setLang(lang);
  }

  /** 🏷️ Page title */
  private setTitle() {
    const titles: Record<AppLang, string> = {
      en: 'RiseRoots Enterprises | Real Estate Consultants',
      te: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ | రియల్ ఎస్టేట్ కన్సల్టెంట్స్',
      hi: 'राइज़रूट्स एंटरप्राइज़ेज़ | रियल एस्टेट कंसल्टेंट्स',
    };

    this.title.setTitle(titles[this.lang]);
  }

  /** 🔍 SEO meta */
  private updateMeta() {
    this.meta.updateTag({
      name: 'description',
      content: 'Low budget plots, affordable flats and budget lands in Visakhapatnam',
    });
  }
}
