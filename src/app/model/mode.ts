export class Product {
     ProductID: number = 0;
     ProductName = '';
     Discontinued? = false;
     UnitsInStock?: number;
     UnitPrice = 0;
     Category = {
        CategoryID: 0,
        CategoryName: ''
    };
}

export interface Order {
     OrderID: number;
     CustomerID: string;
     EmployeeID: number;
     OrderDate: Date;
     RequiredDate: Date;
     ShippedDate: Date;
     ShipVia: number;
     Freight: number;
     ShipName: string;
     ShipAddress: string;
     ShipCity: string;
     ShipRegion: string;
     ShipPostalCode: string;
     ShipCountry: string;
}

export class Customer {
     Id = '';
     CompanyName = '';
     ContactName = '';
     ContactTitle = '';
     Address?: string = '';
     City = '';
     PostalCode? = '';
     Country? = '';
     Phone? = '';
     Fax? = '';
}

export class Category {
     CategoryID?: number;
     CategoryName?: string;
     Description?: string;
}