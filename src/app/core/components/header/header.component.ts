import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(){}
  @Output() navigateToAbout = new EventEmitter<any>();
  @Output() navigateToSkills = new EventEmitter<any>();
  ngOnInit(): void {
  }
  scrollToAboutSection(){
    this.navigateToAbout.emit('scrollToAbout');
  }
  scrollToSkillsSection(){
    this.navigateToSkills.emit('scrollToSkills');
  }
}
