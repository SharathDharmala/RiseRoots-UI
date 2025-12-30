import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CONTACT_CONFIG,
  GoogleFormTarget,
} from '../../config/contact.config';

@Component({
  selector: 'app-leave-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.css'],
})
export class LeaveMessageComponent implements OnInit {
  @Input() context: { projectName?: string; category?: string } | null = null;
  @Output() close = new EventEmitter<void>();

  /* =========================
     FORM MODEL
  ========================= */
  form = {
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  };

  /* =========================
     UI STATE
  ========================= */
  isSubmitting = false;
  isSent = false;

  ngOnInit(): void {
    const project = this.context?.projectName || 'your project';

    this.form.message = `Hi RiseRoots Team,

I am interested in ${project} Property.
Please share layout information and next steps.

Looking forward to your response.`;
  }

  submit(): void {
    if (this.isSubmitting) return;

    const cfg = CONTACT_CONFIG.googleForm;
    if (!cfg || !cfg.enabled) return;

    this.isSubmitting = true;

    const finalMessage =
      this.form.message ||
      cfg.buildMessage({
        projectName: this.context?.projectName,
        category: this.context?.category,
      });

    cfg.targets
      .filter((t: GoogleFormTarget) => t.enabled)
      .sort(
        (a: GoogleFormTarget, b: GoogleFormTarget) =>
          a.priority - b.priority
      )
      .forEach((target: GoogleFormTarget) => {
        const payload = new URLSearchParams({
          [target.entries.name]: this.form.name,
          [target.entries.phone]: this.form.phone,
          [target.entries.email]: this.form.email || '',
          [target.entries.address]: this.form.address || '',
          [target.entries.message]: finalMessage,
        });

        fetch(target.submitUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: payload.toString(),
        });
      });

    this.isSent = true;

    setTimeout((): void => {
      this.close.emit();
    }, 1800);
  }
}
