import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username;
  profile: User;
  isLoading = false;
  storeData: string;
  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }
  private baseUrl = 'https://api.github.com/users/';
  ngOnInit() {
  }
  getProfile() {
    delete this.profile;
    this.isLoading = true;
    this.storeData = localStorage.getItem(this.username);
    if (this.storeData) {
      console.log('lalal');
      this.isLoading = false;
      this.profile = JSON.parse(this.storeData);
    } else {
      // tslint:disable-next-line: max-line-length
      return this.httpClient.get(this.baseUrl + this.username + '?access_token=9ec9f25578959a3b92a2791f562174ca123347e6').subscribe((res: User) => {
        console.log(res);
        this.profile = res;
        localStorage.setItem(this.username, JSON.stringify(this.profile));
        this.isLoading = false;
      }, () => {
        this.toastr.error('No such user found', 'Major Error', {
          timeOut: 3000
        });
        this.isLoading = false;
        // alert('Not found');
      });
    }
  }
}
