export class Invoice {
    id: number;
    invoiceNo: string;
    invoiceDate: string;
    customerId: number;
    remark: string;
    subtotal: number;
    vat: number;
    discount: number;
    grandTotal: number;
    invoiceItems:Array<InvoiceItem>
}
export class InvoiceItem {

          
            id: number;
            invoiceId: number;
            lineNo: number;
            itemId: number;
            description: string;
            qty: number;
            uom: string;
            unitPrice: number;
            discount: number;
            vatId: number;
            lineTotal: number;
          }


          