import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-area-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-modal.component.html',
  styleUrls: ['./area-modal.component.css']
})
export class AreaModalComponent implements OnChanges {

  @Input() title = '';
  @Input() images: string[] = [];

  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;
  private startX = 0;
  private endX = 0;
  private swipeThreshold = 50;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images']) {
      this.currentIndex = 0;
    }
  }

  close() {
    this.closed.emit(); // 🔥 ONLY THIS
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  onStart(event: TouchEvent | MouseEvent) {
    this.startX = 'touches' in event
      ? event.touches[0].clientX
      : event.clientX;
  }

  onEnd(event: TouchEvent | MouseEvent) {
    this.endX = 'changedTouches' in event
      ? event.changedTouches[0].clientX
      : event.clientX;

    const diff = this.endX - this.startX;
    if (Math.abs(diff) > this.swipeThreshold) {
      diff > 0 ? this.prev() : this.next();
    }
  }
}
