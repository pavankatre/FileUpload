
import { DashboardModel } from "src/app/dashboard/shared/models/dashboard.model"
export class DashboardService {

    private dashboardList = [
        new DashboardModel(
            new Date().getTime().toString(),
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fu2tkjoru8ohkgkocpgg',
            'Kwality Walls Frozen Dessert',
            130,
            1
        ),
        new DashboardModel(
            112345622632,
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb',
            'Smoky Grilled Chicken Biryani',
            785,
            1
        ),
        new DashboardModel(
            112345622,
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ejqkccpeumwra2yxspny',
            'VAIJNATH VEG NONVEG HOTEL',
            80,
            1
        )
    ]
    //for :- copy og Array and send to dashboard
    sendToChild() {
        return this.dashboardList.slice()
    }

    //For:- get value from form fild and push og array   
    getvalu(product: any) {
        this.dashboardList.push(product)
    }
  
}