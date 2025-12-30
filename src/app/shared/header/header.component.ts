import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /* ================= LANGUAGE ================= */
  @Input() lang: 'en' | 'te' | 'hi' = 'en';
  @Output() langChange = new EventEmitter<'en' | 'te' | 'hi'>();

  /* ================= TEXT ================= */
  @Input() text!: any;

  /* ================= TABS ================= */
  @Input() activeTab!: 'services' | 'realestate' | 'xyz';
  @Output() tabChange = new EventEmitter<'services' | 'realestate' | 'xyz'>();

  switchLang(language: 'en' | 'te' | 'hi') {
    this.langChange.emit(language);
  }

  switchTab(tab: 'services' | 'realestate' | 'xyz') {
    this.tabChange.emit(tab);
  }
}
