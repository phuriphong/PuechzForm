import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuotationsService } from 'src/app/services/quotations.service';
import { Quotation } from 'src/app/models/quotation';

@Component({
  selector: 'app-quotation-view',
  templateUrl: './quotation-view.page.html',
  styleUrls: ['./quotation-view.page.scss'],
})
export class QuotationViewPage implements OnInit {
  URL: string;
  Model: Quotation;
  id: any;

  constructor( private quotationsServices:QuotationsService, private _router: ActivatedRoute) { }
  ngOnInit() {
         console.log('params');
         this._router.paramMap
         .subscribe((queryParams: ParamMap) => {
            this.id = queryParams.get('id');
            this.quotationsServices.getQuotationById(this.id).subscribe(r=>this.Model=r);
        });
  }
}
