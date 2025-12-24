import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';
import { Meta, Title } from '@angular/platform-browser';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LandingComponent,
    RealEstateComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private meta: Meta, private title: Title) {
  this.updateMeta();
}

  // ---------- LANGUAGE ----------
  lang: 'en' | 'te' | 'hi' = 'en';

  text: any = {
    en: {
      title: 'RiseRoots Enterprises',
      //tagline: 'Farm Lands • Open Plots • Residential Flats'
    },
    te: {
      title: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్',
      //tagline: 'వ్యవసాయ భూములు • ఓపెన్ ప్లాట్లు • నివాస ఫ్లాట్లు'
    },
    hi: {
      title: 'राइज़रूट्स एंटरप्राइज़ेज़',
      //tagline: 'फार्म लैंड • ओपन प्लॉट्स • रेसिडेंशियल फ्लैट्स'
    }
  };

switchLang(language: 'en' | 'te' | 'hi') {
  this.lang = language;
  this.updateMeta();
  this.setPageTitle();
}


  // ---------- TABS ----------
  activeTab: 'services' | 'realestate' | 'xyz' = 'services';

  switchTab(tab: 'services' | 'realestate' | 'xyz') {
    this.activeTab = tab;
  }
setPageTitle() {
  const titles = {
    en: 'RiseRoots Enterprises | Real Estate Consultants',
    te: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ | రియల్ ఎస్టేట్',
    hi: 'राइज़रूट्स एंटरप्राइज़ेज़ | रियल एस्टेट'
  };

  document.title = titles[this.lang];
}

  updateMeta() {
  const titles: any = {
    en: 'RiseRoots Enterprises | Farm Lands | Open Plots | Flats',
    te: 'రైజ్‌రూట్స్ | వ్యవసాయ భూములు | ప్లాట్లు | ఫ్లాట్లు',
    hi: 'राइज़रूट्स | फार्म लैंड | प्लॉट्स | फ्लैट्स'
  };

  
  this.title.setTitle(titles[this.lang]);

  this.meta.updateTag({
    name: 'description',
    content: titles[this.lang]
  });
}

@HostListener('document:contextmenu', ['$event'])
disableRightClick(event: MouseEvent) {
  event.preventDefault();
}
}
