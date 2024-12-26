import { state, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Three from 'Three';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [trigger('popup', [])],
    standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  title = 'geff-portfolio';
}













  // @ViewChild('canvas') canvas !: ElementRef;
  // renderer !: Three.WebGLRenderer;
  // scene !: Three.Scene;
  // camera !: Three.PerspectiveCamera;
  // cube !: Three.Mesh


  // ngAfterViewInit(): void {
  //   const canvas = this.canvas.nativeElement;

  //   this.scene = new Three.Scene();
  //   this.camera = new Three.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  //   this.renderer = new Three.WebGLRenderer({  canvas   });

  //   // Add objects to the scene, e.g., a cube
  //   const geometry = new Three.BoxGeometry(1, 1, 1);
  //   const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
  //   this.cube = new Three.Mesh(geometry, material);   


  //   this.animate();
  // }
  // ngOnInit(): void {
  //   // this.scene = new Three.Scene();
  //   // this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   // this.renderer = new Three.WebGLRenderer();
  // }

  // animate() {
    
  //   // Update objects, e.g., rotate the cube
  //   this.cube.rotation.x += 0.01;
  //   this.cube.rotation.y += 0.01;
  //   this.scene.add(this.cube);
  //   requestAnimationFrame(() => this.animate());
  //   this.renderer.render(this.scene, this.camera);

  // }
