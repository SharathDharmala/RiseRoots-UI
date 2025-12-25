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
  @Input() images: string[] = [];

  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;

  private startX = 0;
  private swipeThreshold = 50;

  /* CONTACT DATA (simple & reliable) */
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

  get totalSlides(): number {
    return this.images.length + 1; // last = contact
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images']) {
      this.currentIndex = 0;
    }
  }

  close() {
    this.closed.emit();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  /* Keyboard support */
  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  /* Swipe – images only */
  onStart(event: TouchEvent | MouseEvent) {
    if (this.currentIndex === this.images.length) return;

    this.startX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  }

  onEnd(event: TouchEvent | MouseEvent) {
    if (this.currentIndex === this.images.length) return;

    const endX = 'changedTouches' in event ? event.changedTouches[0].clientX : event.clientX;

    const diff = endX - this.startX;
    if (Math.abs(diff) > this.swipeThreshold) {
      diff > 0 ? this.prev() : this.next();
    }
  }
}
