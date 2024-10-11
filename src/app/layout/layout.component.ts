import { Component } from '@angular/core';
import { HerosectionComponent } from './herosection/herosection.component';
import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { CountssectionComponent } from './countssection/countssection.component';
import { WhyussectionComponent } from './whyussection/whyussection.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HerosectionComponent, AboutsectionComponent, CountssectionComponent, WhyussectionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
