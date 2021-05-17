import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { UserLoginComponent } from 'src/app/login/login.component';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import { AppMainComponent } from '../../app.main.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from 'primeng/api';
import {Product} from '../domain/product'
//import {ProductService} from '../service/productservice';
import { domain } from 'process';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  ordersChart: any;

  ordersOptions: any;

  activeOrders = 0;

  trafficChart: any;

  trafficOptions: any;

  activeTraffic = 0;

  goalChart: any;

  goalOptions: any;

  items: MenuItem[];

  val1 = 1;

  val2 = 2;

  orderWeek: any;

  selectedOrderWeek: any;

  products: Product[];

  productsThisWeek: Product[];

  productsLastWeek: Product[];


  constructor(private messageService: MessageService,private router: Router,private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Favorites' },
      { label: 'Dashboard', routerLink: ['dashboard'] }
  ]);
  }

  ngOnInit(): void {
   /* if(sessionStorage.getItem('username') == null){
      //user must login to use the application, else s/he gets bounced out
      this.addError("Session Expired.","Your current session has expired. Re-login.");
      this.router.navigate(['']);
    }  */
    this.dashboardView();
  }

  dashboardView(){
    this.ordersChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
      datasets: [{
          label: 'PWID',
          data:     [31, 83, 69, 29, 62, 25, 59, 26, 46],
          borderColor: [
              '#00acac',
          ],
          borderWidth: 2,
          fill: false,
          borderDash: [3, 6],
      }, {
          label: 'GBV',
          data:     [67, 98, 27, 88, 38, 3, 22, 60, 56],
          borderColor: [
              '#f1b263',
          ],
          backgroundColor: [
              'rgba(241, 178, 99, .07)',
          ],
          borderWidth: 2,
          fill: true,
          pointRadius: 3,
      }]
  };
  this.ordersOptions = {
    legend: {
        display: true,
        labels: {
            fontColor: '#A0A7B5'
        }
    },
    responsive: true,
    hover: {
        mode: 'index'
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: '#A0A7B5'
            },
            gridLines: {
                color:  'rgba(160, 167, 181, .3)',
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: '#A0A7B5'
            },
            gridLines: {
                color:  'rgba(160, 167, 181, .3)',
            }
        }],
    }
};

this.trafficChart = this.getTrafficChartData();

this.trafficOptions = {
  legend: {
      display: false,
  },
  responsive: true,
  cutoutPercentage: 70
};

/*this.appMain['refreshTrafficChart'] = () => {
  this.trafficChart = this.getTrafficChartData();
};*/

this.goalChart = {
  labels: [
      'Complete',
      'Not Complete',
      'Extra Tasks',
  ],
  datasets: [{
      data:  [183, 62, 10],
      backgroundColor: [
          '#ffffff',
          'rgba(255,255,255,.2)',
          'rgba(255,255,255,.5)',
      ],
      borderWidth: 0,
  }]
};

this.goalOptions = {
  legend: {
      display: false,
  },
  responsive: true,
};

this.items = [
  {label: 'View Profile', icon: 'pi pi-user'},
  {label: 'Update Profile', icon: 'pi pi-refresh'},
  {label: 'Delete Profile', icon: 'pi pi-trash'},
];

this.orderWeek = [
  {name: 'This Week', code: '0'},
  {name: 'Last Week', code: '1'}
];


  }

  getTrafficChartData() {
    return {
        labels: [
            'Add View',
            'Total View',
        ],
        datasets: [{
            data:  [48, 52],
            backgroundColor: [
                getComputedStyle(document.body).getPropertyValue('--primary-dark-color') || '#2c84d8',
                getComputedStyle(document.body).getPropertyValue('--content-alt-bg-color') || '#B1B9C9',
            ],
            borderWidth: 0,
        }]
    };
}

changeDataset(event) {
    const dataSet = [
        [31, 83, 69, 29, 62, 25, 59, 26, 46],
        [40, 29, 7, 73, 81, 69, 46, 21, 96],
    ];
    const dataSet2 = [
        [67, 98, 27, 88, 38, 3, 22, 60, 56],
        [74, 67, 11, 36, 100, 49, 34, 56, 45],
    ];

    this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));

    this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
    this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
    this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
    this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
}

changeTrafficset(event){
    const traffidDataSet = [
        [48, 52],
        [26, 74],
        [12, 88],
    ];
    this.activeTraffic = parseInt(event.currentTarget.getAttribute('data-index'));

    this.trafficChart.datasets[0].data = traffidDataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
}

recentSales(event) {
    if (event.value.code === '0') {
        this.products = this.productsThisWeek;
    } else {
        this.products = this.productsLastWeek;
    }
}


  addSuccess(title:string,message:string) {
    this.messageService.add({severity:'success', summary:title, detail:message});
  }
  addError(title:string,message:string) {
    this.messageService.add({severity:'error', summary:title, detail:message});
  }
}
