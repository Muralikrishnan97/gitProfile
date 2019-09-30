import { Component, OnInit, Input } from '@angular/core';

// import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
  @Input() profile;
  constructor() { }

  ngOnInit() {
  }
}
