import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapsAngularLibModule } from 'chaps-angular-lib';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, ChapsAngularLibModule, RouterLink],
  templateUrl: './author.component.html'
})
export class AuthorComponent {

}
