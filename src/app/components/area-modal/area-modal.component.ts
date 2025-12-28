import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CONTACT_CONFIG, ContactItem } from '../../config/contact.config';
import { ContactActionsService } from '../../services/contact-actions.service';

/* =========================
   GROUPED CONTACT MODEL
========================= */
interface ContactGroup {
  value: string;
  phone?: ContactItem;
  whatsapp?: ContactItem;
}

@Component({
  selector: 'app-area-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-modal.component.html',
  styleUrls: ['./area-modal.component.css'],
})
export class AreaModalComponent implements OnChanges, OnInit {
  @Input() title = '';
  @Input() media: string[] = [];

  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;
  private startX = 0;
  private swipeThreshold = 50;

  /* =========================
     CONTACT CONFIG (SOURCE)
  ========================= */
  private contactItems: ContactItem[] = CONTACT_CONFIG;

  /* =========================
     DERIVED CONTACT DATA
  ========================= */
  contactGroups: ContactGroup[] = [];
  emailContact?: ContactItem;

  /* =========================
     CONSTRUCTOR (NEW – SAFE)
  ========================= */
  constructor(public contactActions: ContactActionsService) {}

  /* =========================
     LIFECYCLE
  ========================= */
  ngOnInit(): void {
    this.buildContactGroups();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['media']) {
      this.currentIndex = 0;
    }
  }

  /* =========================
     CONTACT GROUPING LOGIC
     (NO DATA LOSS)
  ========================= */
  private buildContactGroups(): void {
    const map = new Map<string, ContactGroup>();

    for (const item of this.contactItems) {
      if (item.type === 'email') {
        this.emailContact = item;
        continue;
      }

      if (!map.has(item.value)) {
        map.set(item.value, { value: item.value });
      }

      const group = map.get(item.value)!;

      if (item.type === 'phone') {
        group.phone = item;
      }

      if (item.type === 'whatsapp') {
        group.whatsapp = item;
      }
    }

    this.contactGroups = Array.from(map.values());
  }

  /* =========================
     ANALYTICS WRAPPERS (NEW)
  ========================= */
  onCallClick(phone: string) {
    this.contactActions.call(phone, 'area_modal');
  }

  onWhatsAppClick(phone: string) {
    this.contactActions.whatsapp(phone, 'area_modal');
  }

  /* =========================
     SLIDER HELPERS
  ========================= */
  get totalSlides(): number {
    return this.media.length + 1;
  }

  /* =========================
     MEDIA TYPE DETECTION
  ========================= */
  getMediaType(src: string): 'image' | 'video' | 'pdf' | 'unknown' {
    const ext = src.split('.').pop()?.toLowerCase() || '';

    if (['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext)) return 'image';
    if (['mp4'].includes(ext)) return 'video';
    if (['pdf'].includes(ext)) return 'pdf';

    return 'unknown';
  }

  /* =========================
     MODAL CONTROLS
  ========================= */
  close() {
    this.closed.emit();
  }

  prev() {
    this.stopVideo();
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next() {
    this.stopVideo();
    if (this.currentIndex < this.media.length) this.currentIndex++;
  }

  /* =========================
     KEYBOARD SUPPORT
  ========================= */
  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  /* =========================
     SWIPE SUPPORT
  ========================= */
  onStart(event: TouchEvent | MouseEvent) {
    if (this.currentIndex === this.media.length) return;

    this.startX =
      'touches' in event ? event.touches[0].clientX : event.clientX;
  }

  onEnd(event: TouchEvent | MouseEvent) {
    if (this.currentIndex === this.media.length) return;

    const endX =
      'changedTouches' in event
        ? event.changedTouches[0].clientX
        : event.clientX;

    const diff = endX - this.startX;
    if (Math.abs(diff) > this.swipeThreshold) {
      diff > 0 ? this.prev() : this.next();
    }
  }

  /* =========================
     STOP VIDEO ON SLIDE CHANGE
  ========================= */
  private stopVideo() {
    document.querySelectorAll('video').forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
  }
}
