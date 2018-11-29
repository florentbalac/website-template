import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from "./projects/projects.component";

const projectsRoutes: Routes = [
    { path: '', component: ProjectsComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class ProjectsRoutingModule { }
