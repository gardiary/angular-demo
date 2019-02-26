import { Component, OnInit } from '@angular/core';

import { Gender } from '../model/gender';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  genders: Gender[] = [
    {value: "MALE", text: "Male"},
    {value: "FEMALE", text: "Female"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
