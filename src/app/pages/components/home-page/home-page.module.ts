import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { FeatureRoutes } from "./home-page-routing.module";
import { CommonModule } from "@angular/common";
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
    declarations: [HomePageComponent, AboutPageComponent, ProjectsComponent, SkillsComponent],
    imports: [
        FeatureRoutes,
        CommonModule,
    ],
    exports: [HomePageComponent, AboutPageComponent]
})
export class HomePageModule{

}

