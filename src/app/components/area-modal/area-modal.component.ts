import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactActionsService } from '../../services/contact-actions.service';
import { CONTACT_CONFIG } from '../../config/contact.config';

import { LeaveMessageComponent } from '../google-forms/leave-message.component';

/* =========================
   GROUPED CONTACT MODEL
========================= */
interface ContactGroup {
  value: string;
  callLink?: string;
  whatsappLink?: string;
}

/* =========================
   EMAIL MODEL (UI SAFE)
========================= */
interface EmailContact {
  label?: string;
  value: string;
  mailto?: string;
}

/* =========================
   LEAD CONTEXT (GENERIC & OPTIONAL)
========================= */
interface LeadContext {
  source: 'slider' | 'contact';
  slideIndex?: number;
  projectName?: string;
  category?: string;
}

@Component({
  selector: 'app-area-modal',
  standalone: true,
  imports: [CommonModule, LeaveMessageComponent],
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
  private contactConfig = CONTACT_CONFIG;

  /* =========================
     DERIVED CONTACT DATA
  ========================= */
  contactGroups: ContactGroup[] = [];
  visibleEmails: EmailContact[] = [];

  /* =========================
     LEAD CONTEXT (NON-BREAKING)
  ========================= */
  leadContext?: LeadContext;

  /* =========================
     CONSTRUCTOR
  ========================= */
  constructor(public contactActions: ContactActionsService) {}

  /* =========================
     LIFECYCLE
  ========================= */
  ngOnInit(): void {
    this.buildContactGroups();
    this.buildVisibleEmails();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['media']) {
      this.currentIndex = 0;
    }
  }

  /* =========================
     CONTACT GROUPING LOGIC
     (UNCHANGED BEHAVIOR)
  ========================= */
  private buildContactGroups(): void {
    this.contactGroups = this.contactConfig.phones.map((p) => ({
      value: p.value,
      callLink: p.callLink,
      whatsappLink: p.whatsappLink,
    }));
  }

  /* =========================
     EMAIL VISIBILITY LOGIC
     (UNCHANGED BEHAVIOR)
  ========================= */
  private buildVisibleEmails(): void {
    this.visibleEmails = this.contactConfig.emails.filter((e) => e.visibleInUI);
  }

  /* =========================
     🔥 LEAVE A MESSAGE (SAFE ADDITION)
     — NO HARD CODING
     — NO SIDE EFFECTS
  ========================= */
  /* =========================
   🔥 LEAVE A MESSAGE (FIXED & SAFE)
   — SINGLE METHOD
   — NO LOGIC LOSS
========================= */
  showLeaveMessage = false;

  openMessageModal(source: 'slider' | 'contact' = 'slider') {
    this.leadContext = {
      source,
      slideIndex: source === 'slider' ? this.currentIndex : undefined,
      projectName: this.title || undefined,
      category: this.resolveCategory(this.title),
    };

    // 🔥 THIS was missing in final flow
    this.showLeaveMessage = true;
  }

  /* Optional close handler (clean) */
  closeLeaveMessage() {
    this.showLeaveMessage = false;
  }

  /* =========================
     CATEGORY RESOLUTION (OPTIONAL)
     — SAFE FALLBACK
  ========================= */
  private resolveCategory(title?: string): string | undefined {
    if (!title) return undefined;

    const t = title.toLowerCase();

    if (t.includes('plot')) return 'Open Plots';
    if (t.includes('flat') || t.includes('apartment')) return 'Flats';
    if (t.includes('farm')) return 'Farm Lands';

    return undefined;
  }

  /* =========================
     ANALYTICS WRAPPERS
     (UNCHANGED)
  ========================= */
  onCallClick(phone: string) {
    this.contactActions.call(phone, 'area_modal');
  }

  onWhatsAppClick(phone: string) {
    this.contactActions.whatsapp(phone, 'area_modal');
  }

  /* =========================
     SLIDER HELPERS
     (UNCHANGED)
  ========================= */
  get totalSlides(): number {
    return this.media.length + 1;
  }

  /* =========================
     MEDIA TYPE DETECTION
     (UNCHANGED)
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
     (UNCHANGED)
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
     (UNCHANGED)
  ========================= */
  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  /* =========================
     SWIPE SUPPORT
     (UNCHANGED)
  ========================= */
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

  /* =========================
     STOP VIDEO ON SLIDE CHANGE
     (UNCHANGED)
  ========================= */
  private stopVideo() {
    document.querySelectorAll('video').forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
  }
}
