import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproperties',
  templateUrl: './editproperties.component.html',
  styleUrls: ['./editproperties.component.css']
})

export class EditpropertiesComponent {
  id: any;
  property:any;


  constructor(private route: ActivatedRoute,private http:HttpClient){

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
    let options = {headers : httpHeaders};

    this.id = this.route.snapshot.params['id'];

    this.http.get(environment.API_URL+"Properties/GetById?Id=" + this.id ,options)
     .subscribe(res => { this.property = res;});

  }

  clickUpdate(id:string){   
   
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('ApiKey',environment.API_KEY);
    let options = {headers : httpHeaders};

    
    console.log('Id' + id);
    this.http.put(environment.API_URL+"Properties?Id=" + id ,this.property,options)
    .subscribe(res => { Swal.fire({
      title: 'Admin',
      text: 'Data updated successfully',
      icon: 'success'        
    }).then(function(){
      window.location.href="http://adminapp.swatirealestates.co.in"
    });      });
  }
  
}
