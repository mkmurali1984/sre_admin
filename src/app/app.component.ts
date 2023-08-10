import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';


class DataTablesResponse {
  data: any=[];
  draw: number | undefined ;
  recordsFiltered: number | undefined ;
  recordsTotal: number | undefined ;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient ){}  

  title = 'sre_admin';
  isActive = true;
  propertiesdata:any=[];  

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    //const that = this;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
    let options = {headers : httpHeaders};
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .get<DataTablesResponse>(
            environment.API_URL+'Properties',
            options
          ).subscribe(resp => {
            this.propertiesdata = resp;
            console.log(resp);            
          });
      },
      columns: [{ data: 'pId' }, { data: 'PersonName'}, { data: 'personAddress' }]
    };
  }
    


  // ngOnInit():void{
  //   this.getPropertiesData();
  // }

  // getPropertiesData() {
    
  //   let httpHeaders = new HttpHeaders();
  //   httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
  //   let options = {headers : httpHeaders};

  //   this.http.get<any>(environment.API_URL+'Properties', options)
  //   .subscribe(data => { 
  //     this.propertiesdata = data;
  //   });
  // }

  // clickUpdate(id:string){   
   
  //   let httpHeaders = new HttpHeaders();
  //   httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
  //   let options = {headers : httpHeaders};

  //   var _SelectedPropertyData = this.propertiesdata.find((x1: { pId: string; }) => x1.pId==id);
  //   console.log('Id' + id);
  //   this.http.put(environment.API_URL+"Properties?Id=" + id ,_SelectedPropertyData,options)
  //   .subscribe(res => { alert("Data Updated Successfully.")});
  // }
}
