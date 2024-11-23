import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page.component";

const routes : Routes = [
    {
        path: '',
        component: HomePageComponent
    }
]

export const FeatureRoutes = RouterModule.forChild(routes); 