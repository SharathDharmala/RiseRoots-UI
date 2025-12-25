import { AreaModalComponent } from '../../components/area-modal/area-modal.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  REAL_ESTATE_CONFIG,
  AreaConfig,
  CategoryConfig,
} from '../../data/real-estate.config';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [CommonModule, AreaModalComponent],
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css'],
})
export class RealEstateComponent {
  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  categories: CategoryConfig[] = [
    {
      key: 'plots',
      banner: 'banners/open-plots1.jpg',
      label: { en: 'Open Plots', te: 'ఓపెన్ ప్లాట్లు', hi: 'ओपन प्लॉट्स' },
      subtitle: {
        en: 'VMRDA & RERA approved plots',
        te: 'VMRDA & RERA ఆమోదిత ప్లాట్లు',
        hi: 'VMRDA और RERA अनुमोदित प्लॉट्स',
      },
    },
    {
      key: 'flats',
      banner: 'banners/residential-flats1.jpg',
      label: {
        en: 'Residential Flats',
        te: 'నివాస ఫ్లాట్లు',
        hi: 'रेसिडेंशियल फ्लैट्स',
      },
      subtitle: {
        en: 'RERA approved, Ready & under-construction homes',
        te: 'RERA ఆమోదిత, సిద్ధంగా ఉన్న మరియు నిర్మాణంలో ఉన్న ఇళ్లు',
        hi: 'RERA अनुमोदित, रेडी और निर्माणाधीन घर',
      },
    },
    {
      key: 'farmLands',
      banner: 'banners/farm-lands1.jpg',
      label: {
        en: 'Farm Lands',
        te: 'వ్యవసాయ భూములు',
        hi: 'फार्म लैंड',
      },
      subtitle: {
        en: 'Agricultural & long-term investment lands',
        te: 'వ్యవసాయ మరియు దీర్ఘకాలిక పెట్టుబడి భూములు',
        hi: 'कृषि और दीर्घकालिक निवेश भूमि',
      },
    },

    /* ========= COMING SOON ========= */
    { key: 'leasing', label: { en: 'Land Leasing', te: 'భూమి లీజింగ్', hi: 'भूमि लीजिंग' }, disabled: true },
    { key: 'resale', label: { en: 'Resale Properties', te: 'రీసేల్ ప్రాపర్టీస్', hi: 'रीसेल प्रॉपर्टीज' }, disabled: true },
    { key: 'commercial', label: { en: 'Commercial Sales & Leasing', te: 'కమర్షియల్ విక్రయం & లీజింగ్', hi: 'वाणिज्यिक बिक्री और लीजिंग' }, disabled: true },
    {
      key: 'propertyManagement',
      label: { en: 'Property Management', te: 'ప్రాపర్టీ నిర్వహణ', hi: 'प्रॉपर्टी प्रबंधन' },
      subtitle: {
        en: 'For NRIs & Investors',
        te: 'ఎన్‌ఆర్‌ఐలు మరియు పెట్టుబడిదారుల కోసం',
        hi: 'एनआरआई और निवेशकों के लिए',
      },
      disabled: true,
    },
    {
      key: 'jointVentures',
      label: { en: 'Joint Ventures & Development', te: 'జాయింట్ వెంచర్స్ & అభివృద్ధి', hi: 'संयुक्त उद्यम और विकास' },
      subtitle: {
        en: 'Landowner & Builder Tie-ups',
        te: 'భూస్వామి & బిల్డర్ భాగస్వామ్యం',
        hi: 'भूमि मालिक और बिल्डर साझेदारी',
      },
      disabled: true,
    },
    {
      key: 'legalSupport',
      label: { en: 'Legal & Documentation Support', te: 'లీగల్ & డాక్యుమెంటేషన్ సహాయం', hi: 'कानूनी और दस्तावेज़ सहायता' },
      subtitle: {
        en: 'Registration & Title Verification',
        te: 'రిజిస్ట్రేషన్ & టైటిల్ ధృవీకరణ',
        hi: 'पंजीकरण और शीर्षक सत्यापन',
      },
      disabled: true,
    },
  ];

  activeCategory: CategoryConfig = this.categories[0];

  /* MODAL STATE */
  modalVisible = false;
  modalTitle = '';
  modalMedia: string[] = [];

  selectCategory(category: CategoryConfig) {
    if (category.disabled) return;
    this.activeCategory = category;
  }

  get areas(): AreaConfig[] {
    return REAL_ESTATE_CONFIG[this.activeCategory.key] || [];
  }

  openArea(area: AreaConfig) {
    this.modalTitle = area.name;
    this.modalMedia = [...(area.images || [])];
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.modalMedia = [];
  }
}
