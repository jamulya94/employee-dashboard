import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropList,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  list = [{}];
  midShiftData = [
    {
      time: '11:00 PM',
      time1: '7:00AM',
      name: 'BM',
    },
    {
      time: '11:00 PM',
      time1: '7:00AM',
      name: 'ZT',
    },
  ];
  midShiftData1 = [
    {
      time: '11:00 PM',
      time1: '7:00AM',
      name: 'AB',
    },
    {
      time: '11:00 PM',
      time1: '7:00AM',
      name: 'AC',
    },
  ];
  dayShiftData = [
    {
      time: '6:00 AM',
      time1: '2:00PM',
      name: 'OA',
    },
    {
      time: '6:00 AM',
      time1: '2:00PM',
      name: 'MG',
    },
    {
      time: '6:00 AM',
      time1: '2:00PM',
      name: 'TV',
    },
    {
      time: '6:00 AM',
      time1: '2:00PM',
      name: 'RM',
    },
  ];
  dayShiftData1 = [
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'RG',
    },
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'ZO',
    },
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'HY',
    },
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'XT',
    },
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'YP',
    },
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'TY',
    },
    {
      time: '7:00 AM',
      time1: '3:00 PM',
      name: 'ZC',
    },
  ];
  dayShiftData2 = [
    {
      time: '8:00 AM',
      time1: '4:00 PM',
      name: 'JE',
    },
  ];
  EvngShiftData = [
    {
      time: '1:00 AM',
      time1: '8:00 PM',
      name: 'AB',
    },
    {
      time: '1:00 AM',
      time1: '8:00 PM',
      name: 'WA',
    },
    {
      time: '1:00 AM',
      time1: '8:00 PM',
      name: 'BO',
    },
  ];
  EvngShiftData1 = [
    {
      time: '2:00 AM',
      time1: '8:00 PM',
      name: 'CS',
    },
  ];
  EvngShiftData2 = [
    {
      time: '5:00 AM',
      time1: '8:00 PM',
      name: 'LI',
    },
    {
      time: '5:00 AM',
      time1: '8:00 PM',
      name: 'FK',
    },
    {
      time: '5:00 AM',
      time1: '8:00 PM',
      name: 'KM',
    },
    {
      time: '5:00 AM',
      time1: '8:00 PM',
      name: 'TX',
    },
    {
      time: '5:00 AM',
      time1: '8:00 PM',
      name: 'GJ',
    },
  ];
  EvngShiftData3 = [
    {
      time: '4:00 AM',
      time1: '8:00 PM',
      name: 'OR',
    },
  ];
  constructor() {}

  ngOnInit() {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
