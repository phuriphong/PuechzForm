import { QuotationsService } from './../../services/quotations.service';
import { Component, OnInit } from '@angular/core';
import { Quotation } from './../../models/quotation';
   
@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.page.html',
  styleUrls: ['./quotation-list.page.scss'],
})
export class QuotationListPage implements OnInit {

  constructor(private quotationsService:QuotationsService) { }
  QuotationsList:Array<Quotation>
  ngOnInit() {
    this.quotationsService.getQuotations().subscribe(x=>{
      console.log(x);
      this.QuotationsList=x;
    });
  }

}
