import { ParamMap, ActivatedRoute } from '@angular/router';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.page.html',
  styleUrls: ['./invoices-view.page.scss'],
})
export class InvoicesViewPage implements OnInit {

  Model: Invoice;
  id: any;

  constructor( private invoicesService:InvoicesService, private _router: ActivatedRoute) { }
  ngOnInit() {
    console.log('params');
    this._router.paramMap
    .subscribe((queryParams: ParamMap) => {
       this.id = queryParams.get('id');
       this.invoicesService.getInvoicesById(this.id).subscribe(r=>this.Model=r);
   });
}

}
