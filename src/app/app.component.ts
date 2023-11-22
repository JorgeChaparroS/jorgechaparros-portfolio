import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChapsAngularLibModule } from 'chaps-angular-lib';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ChapsAngularLibModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'jorgechaparros-portfolio';
}
