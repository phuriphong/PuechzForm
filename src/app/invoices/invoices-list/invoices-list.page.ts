import { Component, OnInit } from '@angular/core';
import { InvoicesService } from 'src/app/services/invoices.service';
import { Invoice } from 'src/app/models/invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.page.html',
  styleUrls: ['./invoices-list.page.scss'],
})
export class InvoicesListPage implements OnInit {
  invoicesList: Array< Invoice>;

  constructor(private invoicesService: InvoicesService,private router :Router) { }

  ngOnInit() {
    this.invoicesService.getInvoices().subscribe(x=>{
      console.log(x);
      this.invoicesList=x;
    });
  }
  View(q :Invoice)
  {
    console.log(q);
    this.router.navigate(['/app/invoices/view/', { id:q.id }]);
  }

}
