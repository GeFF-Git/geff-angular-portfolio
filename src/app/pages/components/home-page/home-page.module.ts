import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { FeatureRoutes } from "./home-page-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        FeatureRoutes,
        CommonModule,
    ],
    exports: [HomePageComponent]
})
export class HomePageModule{

}

