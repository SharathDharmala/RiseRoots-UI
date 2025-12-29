import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from '../flowers/flowers';

@Component({
  selector: 'app-header-effect',
  standalone: true,
  imports: [CommonModule, FlowersComponent],
  templateUrl: './header-effect.component.html',
  styleUrls: ['./header-effect.component.css'],
})
export class HeaderEffectComponent {
  @Input() showHeaderEffect = false;
}
