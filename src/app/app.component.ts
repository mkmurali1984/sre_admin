import { Component } from '@angular/core';
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
export class AppComponent {
  
  title = 'sre_admin';
  isActive = true;
  propertiesdata:any=[];  

     
  constructor(private http:HttpClient ){
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
    let options = {headers : httpHeaders};

    this.http.get<any>(environment.API_URL+'Properties', options)
    .subscribe(data => { 
      this.propertiesdata = data;
      
      setTimeout(()=>{   
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 15,
          processing: true,
          lengthMenu : [5, 10, 25]
      });
      }, 1);
            }, error => console.error(error));

  }  

  clickUpdate(id:string){   
   
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
    let options = {headers : httpHeaders};

    var _SelectedPropertyData = this.propertiesdata.find((x1: { pId: string; }) => x1.pId==id);
    console.log('Id' + id);
    this.http.put(environment.API_URL+"Properties?Id=" + id ,_SelectedPropertyData,options)
    .subscribe(res => { alert("Data Updated Successfully.")});
  }
}
