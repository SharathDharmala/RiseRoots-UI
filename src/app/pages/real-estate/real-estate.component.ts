import { AreaModalComponent } from '../../components/area-modal/area-modal.component';

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  REAL_ESTATE_CONFIG,
  AreaConfig,
  CategoryConfig
} from '../../data/real-estate.config';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [
    CommonModule,
    AreaModalComponent
  ],
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent {

  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  categories: CategoryConfig[] = [    
    {
      key: 'plots',
      banner: 'banners/open-plots.jpg',
      label: { en: 'Open Plots', te: 'ఓపెన్ ప్లాట్లు', hi: 'ओपन प्लॉट्स' },
      subtitle: {
        en: 'VMRDA & RERA approved plots',
        te: 'VMRDA & RERA ఆమోదిత ప్లాట్లు',
        hi: 'VMRDA और RERA अनुमोदित प्लॉट्स'
      }
    },
    {
      key: 'flats',
      banner: 'banners/residential-flats.jpg',
      label: { en: 'Residential Flats', te: 'నివాస ఫ్లాట్లు', hi: 'रेसिडेंशियल फ्लैट्स' },
      subtitle: {
        en: 'RERA approved, Ready & under-construction homes',
        te: 'RERA ఆమోదిత, సిద్ధంగా ఉన్న మరియు నిర్మాణంలో ఉన్న ఇళ్లు',
        hi: 'RERA अनुमोदित, रेडी और निर्माणाधीन घर'
      }
    },
    {
      key: 'farmLands',
      banner: 'banners/farm-lands.jpg',
      label: { en: 'Farm Lands', te: 'వ్యవసాయ భూములు', hi: 'फार्म लैंड' },
      subtitle: {
        en: 'Agricultural & long-term investment lands',
        te: 'వ్యవసాయ మరియు దీర్ఘకాలిక పెట్టుబడి భూములు',
        hi: 'कृषि और दीर्घकालिक निवेश भूमि'
      }
    },
    /* ===============================
     COMING SOON (DISABLED)
  ============================== */
  {
    key: 'leasing',
    label: {
      en: 'Land Leasing',
      te: 'భూమి లీజింగ్',
      hi: 'भूमि लीजिंग'
    },
    disabled: true
  },
  {
    key: 'resale',
    label: {
      en: 'Resale Properties',
      te: 'రీసేల్ ప్రాపర్టీస్',
      hi: 'रीसेल प्रॉपर्टीज'
    },
    disabled: true
  },
  {
    key: 'commercial',
    label: {
      en: 'Commercial Sales & Leasing',
      te: 'కమర్షియల్ విక్రయం & లీజింగ్',
      hi: 'वाणिज्यिक बिक्री और लीजिंग'
    },
    disabled: true
  }
  ];

  activeCategory: CategoryConfig = this.categories[0];

  // Modal state
  modalVisible = false;
  modalTitle = '';
  modalImages: string[] = [];

selectCategory(category: CategoryConfig) {
  if (category.disabled) {
    return; // 🚫 no action
  }
  this.activeCategory = category;
}

  get areas(): AreaConfig[] {
    return REAL_ESTATE_CONFIG[this.activeCategory.key] || [];
  }

openArea(area: AreaConfig) {
  this.modalTitle = area.name;
  this.modalImages = [...area.images]; // new reference
  this.modalVisible = true;
}


}
