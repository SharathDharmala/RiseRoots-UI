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
  /* ================= CONSTANT BRAND ================= */
  readonly title = 'RiseRoots Enterprises';
  readonly tagline = 'Grounded in excellence and rising with innovation';

  /* ================= STATE ================= */
  @Input() lang!: 'en' | 'te' | 'hi';
  @Input() activeTab!: 'services' | 'realestate' | 'xyz';

  @Output() langChange = new EventEmitter<'en' | 'te' | 'hi'>();
  @Output() tabChange = new EventEmitter<'services' | 'realestate' | 'xyz'>();

  switchLang(lang: 'en' | 'te' | 'hi') {
    this.langChange.emit(lang);
  }

  switchTab(tab: 'services' | 'realestate' | 'xyz') {
    this.tabChange.emit(tab);
  }
}
