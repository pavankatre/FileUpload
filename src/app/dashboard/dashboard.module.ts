import { NgModule } from "@angular/core";
import { MatIconModule} from '@angular/material/icon';

import { DashboardRouterModule } from "./dashboard-router.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardService } from "./shared/services/dashboard.service";
import { DashboarListComponent } from './dashboar-list/dashboar-list.component';
import { DashboardIteamComponent } from './dashboar-list/dashboard-iteam/dashboard-iteam.component';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations : [
        DashboardComponent,
        DashboarListComponent,
        DashboardIteamComponent
    ],
    imports : [
        BrowserModule,
        DashboardRouterModule,
        MatIconModule
    ],
    providers : [
        DashboardService
    ]
})

export class DashboardModule {}