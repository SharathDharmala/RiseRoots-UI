import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService, AppLang } from '../../services/language.service';

type SeoKey = 'lowBudgetPlots' | 'affordableFlats' | 'budgetLands';

const SEO_TO_REAL_ESTATE_ROUTE: Record<SeoKey, string> = {
  lowBudgetPlots: '/real-estate/open-plots',
  affordableFlats: '/real-estate/residential-flats',
  budgetLands: '/real-estate/farm-lands',
};

const FOOTER_CTA: Record<SeoKey, { en: string; te: string; hi: string }> = {
  lowBudgetPlots: {
    en: 'To explore detailed plot listings, images, site visits, and pricing —',
    te: 'ఈ ప్లాట్లకు సంబంధించిన పూర్తి వివరాలు, చిత్రాలు, సైట్ విజిట్స్ మరియు ధర సమాచారం కోసం —',
    hi: 'इन प्लॉट्स से संबंधित पूरी जानकारी, तस्वीरें, साइट विज़िट और मूल्य विवरण देखने के लिए —',
  },
  affordableFlats: {
    en: 'To view detailed flat listings, images, site visits, and pricing —',
    te: 'ఈ ఫ్లాట్లకు సంబంధించిన పూర్తి వివరాలు, చిత్రాలు, సైట్ విజిట్స్ మరియు ధర సమాచారం కోసం —',
    hi: 'इन फ्लैट्स से संबंधित पूरी जानकारी, तस्वीरें, साइट विज़िट और मूल्य विवरण देखने के लिए —',
  },
  budgetLands: {
    en: 'To explore detailed land listings, images, site visits, and pricing —',
    te: 'ఈ భూములకు సంబంధించిన పూర్తి వివరాలు, చిత్రాలు, సైట్ విజిట్స్ మరియు ధర సమాచారం కోసం —',
    hi: 'इन भूमि से संबंधित पूरी जानकारी, तस्वीरें, साइट विज़िट और मूल्य विवरण देखने के लिए —',
  },
};

@Component({
  selector: 'app-seo-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seo-popup.component.html',
  styleUrls: ['./seo-popup.component.css'],
})
export class SeoPopupComponent {
  lang: AppLang = 'en';

  @Input() title = '';
  @Input() activeAreas: string[] = [];
  @Input() seoKey!: SeoKey;

  @Output() close = new EventEmitter<void>();

  constructor(private router: Router, private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  get footerCtaText(): string {
    return this.seoKey ? FOOTER_CTA[this.seoKey][this.lang] : '';
  }

  goToRealEstate(): void {
    if (!this.seoKey) return;

    const route = SEO_TO_REAL_ESTATE_ROUTE[this.seoKey];
    this.close.emit();

    setTimeout(() => {
      this.router.navigateByUrl(route);
    }, 200);
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.close.emit();
  }
}
