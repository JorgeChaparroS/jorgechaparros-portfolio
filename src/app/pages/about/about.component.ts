import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChapsAngularLibModule } from 'chaps-angular-lib';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, ChapsAngularLibModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
