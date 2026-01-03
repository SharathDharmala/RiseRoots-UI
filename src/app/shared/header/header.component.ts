import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() lang!: 'en' | 'te' | 'hi';
  @Output() langChange = new EventEmitter<'en' | 'te' | 'hi'>();

  @Input() festivalMessage?: string;

  /** ✅ USED BY TEMPLATE */
  activeSection: 'services' | 'real-estate' | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let current = this.route.root;

      // walk to the deepest active route
      while (current.firstChild) {
        current = current.firstChild;
      }

      this.activeSection = current.snapshot.data['section'] ?? null;
    });
  }

  switchLang(lang: 'en' | 'te' | 'hi') {
    this.langChange.emit(lang);
  }
}
