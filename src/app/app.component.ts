import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient ){}

  
  title = 'sre_admin';
  isActive = true;
  propertiesdata:any=[];

  ngOnInit():void{
    this.getPropertiesData();
  }

  getPropertiesData() {
    this.http.get<any>(environment.API_URL+'Properties')
    .subscribe(data => { 
      this.propertiesdata = data;
    });
  }

  clickUpdate(id:string){
    console.log("PropertyID: " + id);
    //console.log(this.propertiesdata);
     this.http.put(environment.API_URL+"Properties", id ,this.propertiesdata)
     .subscribe(res => { alert("Data Updated Successfully.")});
  }
}
