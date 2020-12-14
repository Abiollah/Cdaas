import { Component, OnInit } from '@angular/core';
import {ClientPortalService} from '../service/client.portal.service';
import {MessageService, MenuItem} from 'primeng/api';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import {ClientExtendedInfo} from '../domain/client.portal.data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-portal-list',
  templateUrl: './client.portal.list.component.html',
  providers: [MessageService]
})
export class ClientPortalListComponent implements OnInit {

clientExtInfo: ClientExtendedInfo[];
selectedClients: ClientExtendedInfo[];
loading: boolean;
totalRecords: number;
cols: any[];
exportColumns: any[];
clientExtInfoActionItems: MenuItem[];
swithClientInfo: boolean = true;
testd: number = Date.now();

  constructor(private messageService: MessageService,private router: Router,private clientPortalService:ClientPortalService, 
    private breadcrumbService: AppBreadcrumbService) { 
      this.breadcrumbService.setItems([
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        { label: 'Client Portal Record', routerLink: ['ßß/cportal'] }
         ]);
    }

  ngOnInit() {
    if(sessionStorage.getItem('username') == null){
      this.router.navigate(['']);
    }
    this.clientExtInfoActionItems =[
      {label: 'View Detail', icon:'pi pi-user', routerLink:['/##/cportald']},
      {label: 'Enrol Program', icon:'pi pi-refresh', routerLink:['/##/cportald']}
     
    ]
 
    console.log("Got testd "+this.testd);
    this.getClientExtendedInfo();

  }

  getClientExtendedInfo(){
    this.clientPortalService.getClientExtendedInfo()
   .subscribe(data => { 
     this.clientExtInfo = data;
     this.totalRecords = this.clientExtInfo.length;
   }
    );
    this.loading = true;
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.clientExtInfo);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "clientExtendedInfo");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}
exportPdf() {
  
  this.cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];
this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field})); console.log(this.exportColumns)
  import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(() => {
          const doc = new jsPDF.default('p','pt');
         // doc.autoTable(this.exportColumns, this.clientExtInfo);
          doc.save('clientExtendedInfo.pdf');
      })
  })
}
switchClientExtInfo(): boolean{
  console.log(this.swithClientInfo);
  return this.swithClientInfo ? this.swithClientInfo=false : this.swithClientInfo=true;
}
addSuccess(title:string,message:string) {
  this.messageService.add({severity:'success', summary:title, detail:message});
}
addError(title:string,message:string) {
  this.messageService.add({severity:'error', summary:title, detail:message});
}

}
