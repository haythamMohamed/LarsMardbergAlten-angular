import { Component } from '@angular/core';
import { IntergerationService } from "./app.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vechile-tracking';
  customers : any[] = [] ;
  vechiles : any[] = [] ;
  selectedCustomer : any = null;
  selectedStatus : any = null;


  constructor(public intergerationService : IntergerationService){
    setTimeout(()=> {this.searchVechiles()}, 60000);
  }

  ngOnInit (){
    this.intergerationService.getCustomers().subscribe(data => {
      this.customers = data ;
    });

    this.searchVechiles();
    
  }

  searchVechiles (){
    this.intergerationService.searchVechiles({"status" : this.selectedStatus , "customer" : this.selectedCustomer}).subscribe(data => {
      this.vechiles = data ;
    })
  }

  ngOnDestory(){
  }
 
}
