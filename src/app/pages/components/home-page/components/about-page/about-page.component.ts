import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  animations: [trigger('fadeIn', [
    transition(':enter', [
      style({opacity : 0, transform : 'translateY(2rem)'}),
      animate('600ms ease-in', style({opacity : 1, transform : 'translateY(0)'}))
    ]
  ),
  transition(':leave', [
    // style({opacity : 0, transform : 'translateY(-2rem)'}),
    animate('600ms ease-out', style({ opacity: 0, transform: 'translateY(-0.1rem)' })),
  ]),
  ])
  ]
})
export class AboutPageComponent implements AfterViewInit,OnInit,OnDestroy {
  constructor(private cdr : ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId : object){}

  strings : string[] = ['a ui-developer', 'an api-developer', 'a photographer'];
  skills : string[] = [];
  currentIndex = 0;
  currentSkill : string = 'Geoffrey';
  interval !: NodeJS.Timeout;
  timeout !: NodeJS.Timeout;
  isShowText = true;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadSKills();
    }
  }
  ngAfterViewInit(): void {
    // this.loadSKills();
  }
  loadSKills(){
    setInterval(() => {
      this.isShowText = false;
      this.timeout = setTimeout(() => {
        this.currentSkill = this.strings[this.currentIndex];
        this.isShowText = true; // Re-add the text to DOM, triggering animation
        this.currentIndex = (this.currentIndex + 1) % this.strings.length;
      }, 200); // Short delay to ensure the DOM re-renders
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

}
