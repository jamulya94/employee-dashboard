import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
data = [{
  time1:'11:00PM',
  time2:'7:00AM',
  position:'BM'
},
{
  time1:'11:00PM',
  time2:'7:00AM',
  position:'ZT'
}
]
  constructor() { }

  ngOnInit() {
  }

}