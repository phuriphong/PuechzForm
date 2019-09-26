import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { AbstractControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-invoices-create',
  templateUrl: './invoices-create.page.html',
  styleUrls: ['./invoices-create.page.scss'],
})
export class InvoicesCreatePage implements OnInit {


  InvoiceForm: FormGroup;
  products:any= [{productId: 1, productName: 'prod-1'}, {productId: 2, productName: 'prod-2'}];

  // Property
  get invoiceLines(): FormArray {
    return this.InvoiceForm.get('invoiceItems') as FormArray;
  }

  constructor(private fb: FormBuilder,private invoicesServices:InvoicesService,private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.InvoiceForm = this.fb.group({
      invoiceNo: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      customerId: ['0', Validators.required],
      remark: '',
      subtotal: [0, Validators.required],
      vat: [0, Validators.required],
      discount: [0],
      grandTotal: [0, Validators.required],
      invoiceItems: this.fb.array([this.createinvoiceItems()])

    });
  }
  createinvoiceItems(): FormGroup {
    return this.fb.group({
      id: [0, Validators.required],
      invoiceId: ['', Validators.required],
      lineNo: [0, Validators.required],
      itemId: [0, Validators.required],
      description: [''],
      qty: [0, Validators.required],
      discount: [0],
      uom: ['', Validators.required],
      vatId: ['0'],
      lineTotal: [0, Validators.required]
    });
  }

  addItem() {
    this.invoiceLines.push(this.createinvoiceItems());
  }
  removeItem(i: number) {
    this.invoiceLines.removeAt(i);
  }

  GetProductInfo(ctrl: HTMLInputElement, invoiceLine) {

  }

  calculateLineTotal(line: AbstractControl) {

  }
  invoiceData :Invoice;
  submit() {
    console.log(this.InvoiceForm.valid);
    //if (this.InvoiceForm.valid) 
    {

      this.invoiceData = Object.assign({}, this.invoiceData, this.InvoiceForm.value);

      this.invoicesServices.addInvoices(this.invoiceData).subscribe(
        (data) => {
          console.log('register: ', data);
          if (data) {
            this.router.navigateByUrl('/app/invoices/view');
          }
        },
        error => {
          console.error('Error ', error);
        }
      );
    }
  }
}
