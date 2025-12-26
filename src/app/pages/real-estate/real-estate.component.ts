import { AreaModalComponent } from '../../components/area-modal/area-modal.component';
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  REAL_ESTATE_CONFIG,
  AreaConfig,
  CategoryConfig
} from '../../config/real-estate.config';

import { REAL_ESTATE_BANNER_MEDIA } from '../../config/real-estate-media.config';
import { resolveMediaSources } from '../../data/media.utils';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [CommonModule, AreaModalComponent],
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css'],
})
export class RealEstateComponent implements AfterViewInit {

  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  /* =========================
     VIDEO REF
  ========================= */
  @ViewChild('vizagVideo')
  bannerVideo!: ElementRef<HTMLVideoElement>;

  bannerMedia = REAL_ESTATE_BANNER_MEDIA;

  /* =========================
     CATEGORIES
  ========================= */
  categories: CategoryConfig[] = [
    {
      key: 'plots',
      banner: 'banners/open-plots2.jpg',
      videos: ['assets/videos/vizag1.mp4', 'assets/videos/vizag2.mp4'],
      label: { en: 'Open Plots', te: 'ఓపెన్ ప్లాట్లు', hi: 'ओपन प्लॉट्स' },
      subtitle: {
        en: 'VMRDA & RERA approved plots',
        te: 'VMRDA & RERA ఆమోదిత ప్లాట్లు',
        hi: 'VMRDA और RERA अनुमोदित प्लॉट्स',
      },
    },
    {
      key: 'flats',
      banner: 'banners/residential-flats2.jpg',
      videos: ['assets/videos/vizag3.mp4', 'assets/videos/vizag4.mp4'],
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
      banner: 'banners/farm-lands2.jpg',
      videos: ['assets/videos/vizag5.mp4'],
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

    /* ===== COMING SOON ===== */
    { key: 'leasing', label: { en: 'Land Leasing', te: 'భూమి లీజింగ్', hi: 'भूमि लीजिंग' }, disabled: true },
    { key: 'resale', label: { en: 'Resale Properties', te: 'రీసేల్ ప్రాపర్టీస్', hi: 'रीसेल प्रॉपर्टीज' }, disabled: true },
    { key: 'commercial', label: { en: 'Commercial Sales & Leasing', te: 'కమర్షియల్ విక్రయం & లీజింగ్', hi: 'वाणिज्यिक बिक्री और लीजिंग' }, disabled: true },
    { key: 'propertyManagement', label: { en: 'Property Management', te: 'ప్రాపర్టీ నిర్వహణ', hi: 'प्रॉपर्टी प्रबंधन' }, disabled: true },
    { key: 'jointVentures', label: { en: 'Joint Ventures & Development', te: 'జాయింట్ వెంచర్స్', hi: 'संयुक्त उद्यम' }, disabled: true },
    { key: 'legalSupport', label: { en: 'Legal & Documentation Support', te: 'లీగల్ సహాయం', hi: 'कानूनी सहायता' }, disabled: true },
  ];

  activeCategory: CategoryConfig = this.categories[0];

  /* =========================
     VIDEO STATE
  ========================= */
  currentVideoIndex = 0;

  ngAfterViewInit(): void {
    if (this.bannerMedia.enabled) {
      this.playEngagementVideo();
    }
  }

  private getEngagementVideos(): string[] {
    if (!this.bannerMedia.enabled) return [];

    const allVideos = resolveMediaSources(this.bannerMedia.source);
    return allVideos.slice(0, this.bannerMedia.maxVideosToPlay);
  }

  private playEngagementVideo(): void {
  const video = this.bannerVideo?.nativeElement;
  const videos = this.getEngagementVideos();

  if (!video || videos.length === 0) return;

  video.onended = null;

  // 🔥 fade out
  video.style.opacity = '0';

  setTimeout(() => {
    video.src = videos[this.currentVideoIndex];
    video.load();
    video.muted = true;
    video.playbackRate = this.bannerMedia.playbackRate;

    video.play().catch(() => {});
    video.style.opacity = '1'; // 🔥 fade in
  }, 300);

  video.onended = () => {
    this.currentVideoIndex =
      (this.currentVideoIndex + 1) % videos.length;
    this.playEngagementVideo();
  };
}


  selectCategory(category: CategoryConfig): void {
    if (category.disabled) return;
    this.activeCategory = category;
  }

  /* =========================
     AREAS
  ========================= */
  get areas(): AreaConfig[] {
    return REAL_ESTATE_CONFIG[this.activeCategory.key] || [];
  }

  /* =========================
     MODAL
  ========================= */
  modalVisible = false;
  modalTitle = '';
  modalMedia: string[] = [];

  openArea(area: AreaConfig): void {
    this.modalTitle = area.name;
    this.modalMedia = [...(area.images || [])];
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
    this.modalMedia = [];
  }
}
