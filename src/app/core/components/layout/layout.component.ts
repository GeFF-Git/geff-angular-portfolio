import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  onNavigateToAbout(){
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  onNavigateToSkills(){
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
  }
}
