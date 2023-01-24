import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";

const dashboardRouters = [
    {path : 'dashboard', component : DashboardComponent }
]

@NgModule({
    imports : [RouterModule.forChild(dashboardRouters)],
    exports : [RouterModule]
})

export class DashboardRouterModule {}