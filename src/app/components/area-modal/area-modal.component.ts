import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-modal.component.html',
  styleUrls: ['./area-modal.component.css'],
})
export class AreaModalComponent implements OnChanges {
  @Input() title = '';

  /* 🔥 Unified media input (images, videos, pdfs) */
  @Input() media: string[] = [];

  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;

  private startX = 0;
  private swipeThreshold = 50;

  /* CONTACT DATA */
  contacts = [
    {
      phone: '+91 7801021056',
      tel: 'tel:+917801021056',
      whatsapp: 'https://wa.me/917801021056',
    },
    {
      phone: '+91 7036238999',
      tel: 'tel:+917036238999',
      whatsapp: 'https://wa.me/917036238999',
    },
  ];

  email = {
    value: 'riseroots@outlook.com',
    link: 'mailto:riseroots@outlook.com',
  };

  /* Total slides (last = contact slide) */
  get totalSlides(): number {
    return this.media.length + 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['media']) {
      this.currentIndex = 0;
    }
  }

  /* -----------------------------
     MEDIA TYPE DETECTION
  ----------------------------- */
  getMediaType(src: string): 'image' | 'video' | 'pdf' | 'unknown' {
    const ext = src.split('.').pop()?.toLowerCase() || '';

    if (['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext)) {
      return 'image';
    }

    if (['mp4'].includes(ext)) {
      return 'video';
    }

    if (['pdf'].includes(ext)) {
      return 'pdf';
    }

    return 'unknown';
  }

  close() {
    this.closed.emit();
  }

  /* -----------------------------
     NAVIGATION
  ----------------------------- */
  prev() {
    this.stopVideo();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    this.stopVideo();
    if (this.currentIndex < this.media.length) {
      this.currentIndex++;
    }
  }

  /* -----------------------------
     KEYBOARD SUPPORT
  ----------------------------- */
  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  /* -----------------------------
     SWIPE (media slides only)
  ----------------------------- */
  onStart(event: TouchEvent | MouseEvent) {
    if (this.currentIndex === this.media.length) return;

    this.startX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  }

  onEnd(event: TouchEvent | MouseEvent) {
    if (this.currentIndex === this.media.length) return;

    const endX = 'changedTouches' in event ? event.changedTouches[0].clientX : event.clientX;

    const diff = endX - this.startX;
    if (Math.abs(diff) > this.swipeThreshold) {
      diff > 0 ? this.prev() : this.next();
    }
  }

  /* -----------------------------
     STOP VIDEO ON SLIDE CHANGE
  ----------------------------- */
  private stopVideo() {
    const videos = document.querySelectorAll('video');
    videos.forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
  }
}
