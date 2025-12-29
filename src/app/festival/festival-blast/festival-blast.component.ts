import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-festival-blast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './festival-blast.component.html',
  styleUrls: ['./festival-blast.component.css'],
})

export class FestivalBlastComponent implements OnInit {
  /* ============================
     INPUTS
  ============================ */
  @Input() effect: 'confetti' | 'fireworks' | 'flowers' | 'custom' | null = null;
  @Input() message?: string;

  /* ============================
     INTERNAL STATE
  ============================ */
  visible = false;
  blastDuration = 5000; // ms (easy to tune)

  ngOnInit(): void {
    // No effect → no blast
    if (!this.effect) return;

    this.visible = true;

    // Auto-hide blast after duration
    setTimeout(() => {
      this.visible = false;
    }, this.blastDuration);
  }
}
