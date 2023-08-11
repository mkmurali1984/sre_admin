import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
  property:any;
     
  constructor(private http:HttpClient,private router: Router ){
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
    let options = {headers : httpHeaders};

    this.http.get<any>(environment.API_URL+'Properties', options)
    .subscribe(data => { 
      this.propertiesdata = data;
      
      setTimeout(()=>{   
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25]
      });
      }, 1);
            }, error => console.error(error));

  }  

  clickEdit(id:number){   
    this.router.navigate(['/edit', id]);    
  }  
}
