import { AreaModalComponent } from '../../components/area-modal/area-modal.component';
import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { REAL_ESTATE_CONFIG, AreaConfig, CategoryConfig } from '../../config/real-estate.config';

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
      banner: 'banners/residential-flats3.jpg',
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

    /* ===== COMING SOON ===== */
    {
      key: 'leasing',
      label: { en: 'Land Leasing', te: 'భూమి లీజింగ్', hi: 'भूमि लीजिंग' },
      disabled: true,
    },
    {
      key: 'resale',
      label: { en: 'Resale Properties', te: 'రీసేల్ ప్రాపర్టీస్', hi: 'रीसेल प्रॉपर्टीज' },
      disabled: true,
    },
    {
      key: 'commercial',
      label: {
        en: 'Commercial Sales & Leasing',
        te: 'కమర్షియల్ విక్రయం & లీజింగ్',
        hi: 'वाणिज्यिक बिक्री और लीजिंग',
      },
      disabled: true,
    },
    {
      key: 'propertyManagement',
      label: { en: 'Property Management', te: 'ప్రాపర్టీ నిర్వహణ', hi: 'प्रॉपर्टी प्रबंधन' },
      disabled: true,
    },
    {
      key: 'jointVentures',
      label: { en: 'Joint Ventures & Development', te: 'జాయింట్ వెంచర్స్', hi: 'संयुक्त उद्यम' },
      disabled: true,
    },
    {
      key: 'legalSupport',
      label: { en: 'Legal & Documentation Support', te: 'లీగల్ సహాయం', hi: 'कानूनी सहायता' },
      disabled: true,
    },
  ];

  activeCategory: CategoryConfig = this.categories[0];

  /* =========================
     VIDEO STATE
  ========================= */

  images: string[] = [];
  videos: string[] = [];

  private imageIntervalId: any = null;
  imageSlideDelay = 3500; // 3.5s (adjustable)

  currentImageIndex = 0;
  currentVideoIndex = 0;

  private imageTimer: any;

  private initImages(): void {
    this.images = resolveMediaSources(this.bannerMedia.image.source);
  }

  get hasImages(): boolean {
    return this.images.length > 0;
  }

  private startImageSlider(): void {
    this.stopImageSlider();

    this.imageTimer = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, this.bannerMedia.image.slideInterval);
  }

  private stopImageSlider(): void {
    if (this.imageTimer) {
      clearInterval(this.imageTimer);
      this.imageTimer = null;
    }
  }

  private initVideos(): void {
    this.videos = resolveMediaSources(this.bannerMedia.video.source).slice(
      0,
      this.bannerMedia.video.maxItemsToPlay
    );
  }

  private playVideo(): void {
    const video = this.bannerVideo?.nativeElement;
    if (!video || this.videos.length === 0) return;

    video.onended = null;
    video.style.opacity = '0';

    setTimeout(() => {
      video.src = this.videos[this.currentVideoIndex];
      video.load();
      video.muted = true;
      video.playbackRate = this.bannerMedia.video.playbackRate;

      video.play().catch(() => {});
      video.style.opacity = '1';
    }, 300);

    video.onended = () => {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
      this.playVideo();
    };
  }

  ngAfterViewInit(): void {
    if (!this.bannerMedia.enabled) return;

    if (this.bannerMedia.videoEnabled) {
      this.initVideos();
      this.playVideo();
    }

    if (this.bannerMedia.imageEnabled) {
      this.initImages();
      if (this.bannerMedia.image.autoSlide && this.images.length > 1) {
        this.startImageSlider();
      }
    }
  }

  private getVideoSources(): string[] {
    if (!this.bannerMedia.videoEnabled) return [];

    return resolveMediaSources(this.bannerMedia.video.source).slice(
      0,
      this.bannerMedia.video.maxItemsToPlay
    );
  }

  private startVideoPlayback(): void {
    const video = this.bannerVideo?.nativeElement;
    const videos = this.getVideoSources();

    if (!video || videos.length === 0) return;

    video.onended = null;

    // 🔥 fade out
    video.style.opacity = '0';

    setTimeout(() => {
      video.src = videos[this.currentVideoIndex];
      video.load();
      video.muted = true;
      video.playbackRate = this.bannerMedia.video.playbackRate;

      video.play().catch(() => {});
      video.style.opacity = '1'; // 🔥 fade in
    }, 300);

    video.onended = () => {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % videos.length;
      this.startVideoPlayback();
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

  ngOnDestroy(): void {
    this.stopImageSlider();
  }
}
