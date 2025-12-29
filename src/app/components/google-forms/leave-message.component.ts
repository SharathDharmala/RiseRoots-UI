import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CONTACT_CONFIG } from '../../config/contact.config';

@Component({
  selector: 'app-leave-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.css'],
})
export class LeaveMessageComponent {
  @Input() context: any;
  @Output() close = new EventEmitter<void>();

  form = {
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  };

  submit() {
    const cfg = CONTACT_CONFIG.googleForm;

    const finalMessage =
      this.form.message ||
      cfg.buildMessage({
        projectName: this.context?.projectName,
        category: this.context?.category,
      });

    const payload = new URLSearchParams({
      [cfg.entries.name]: this.form.name,
      [cfg.entries.phone]: this.form.phone,
      [cfg.entries.email]: this.form.email || '',
      [cfg.entries.address]: this.form.address || '',
      [cfg.entries.message]: finalMessage,
    });

    fetch(cfg.submitUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    });

    alert('Thank you! We will contact you shortly.');
    this.close.emit();
  }

  ngOnInit() {
    const project = this.context?.projectName || 'your project';

    this.form.message = `Hi RiseRoots Team,

I am interested in ${project}. 
Please share layout information and next steps.

Looking forward to your response.`;
  }
}
