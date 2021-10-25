import { Component, OnInit } from '@angular/core';

export class StudentList{
  id?: number;
  StudentId?: number;
  StudentName: string;
  Age: number;
  FatherName: string;
  Address: string;
  Place: string;
  DateOfBirth: string;
  Gender: string;
  Email: string;
  Phone1: number;
  Phone2: number;
  Education: EducationList[];
}
export class EducationList{
  id?: number;
  InstituteName: string;
  EducationType: string;
  Percentage: number;
  YearOfCompletion: number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Students: StudentList = new StudentList();
  students: StudentList[] = [];

  constructor() { }

  ngOnInit(): void {
this.students = [
  {id: 1, StudentId: 1001, StudentName: 'Kamal', Age: 21, FatherName: 'Arivu', Address: '1st cross street', Place: 'Chennai', DateOfBirth: '11/5/1992', Gender: 'Male', Email: 'kamal@gmail.com', Phone1: 9982173498, Phone2: 9988221165,
  Education: [
    {id: 1, InstituteName: 'V.D.S.Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'D.G Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 2, StudentId: 1002, StudentName: 'Devi', Age: 42, FatherName: 'Bever', Address: '21st cross street', Place: 'Trichy', DateOfBirth: '30/12/1977', Gender: 'Female', Email: 'devi@gmail.com', Phone1: 9982173412, Phone2: 9988221198,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 3, StudentId: 1003, StudentName: 'Mosole', Age: 33, FatherName: 'Koko', Address: '11th street', Place: 'Madurai', DateOfBirth: '19/08/1987', Gender: 'Male', Email: 'mosole@gmail.com', Phone1: 9982173434, Phone2: 9988221178,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 4, StudentId: 1004, StudentName: 'Deivi', Age: 35, FatherName: 'Richard', Address: '6th street', Place: 'Gingee', DateOfBirth: '24/12/1985', Gender: 'Female', Email: 'Deivi@gmail.com', Phone1: 9982173477, Phone2: 9988221145,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 5, StudentId: 1005, StudentName: 'Tucker', Age: 32, FatherName: 'Sophie', Address: '10th street', Place: 'Chennai', DateOfBirth: '01/02/1988', Gender: 'Male', Email: 'tucker@gmail.com', Phone1: 9982173451, Phone2: 9988221109,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 6, StudentId: 1006, StudentName: 'Kamali', Age: 42, FatherName: 'Arivum', Address: '6th street', Place: 'Chennai', DateOfBirth: '11/5/1978', Gender: 'Female', Email: 'kamali@gmail.com', Phone1: 9982178756, Phone2: 9988221189,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 7, StudentId: 1007, StudentName: 'Devi', Age: 23, FatherName: 'Bever', Address: '21st cross street', Place: 'Trichy', DateOfBirth: '30/12/1985', Gender: 'Female', Email: 'devi@gmail.com', Phone1: 9982179823, Phone2: 9988221112,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 8, StudentId: 1008, StudentName: 'Mosolen', Age: 32, FatherName: 'Kokon', Address: '14th street', Place: 'Madurai', DateOfBirth: '19/08/1986', Gender: 'Male', Email: 'mosolen@gmail.com', Phone1: 9982173451, Phone2: 9988221176,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 9, StudentId: 1009, StudentName: 'Deivini', Age: 35, FatherName: 'Richarn', Address: '6th street', Place: 'Gingee', DateOfBirth: '24/12/1985', Gender: 'Female', Email: 'Deivini@gmail.com', Phone1: 9982113452, Phone2: 9988221156,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
},
  {id: 10, StudentId: 1010, StudentName: 'Tuckeran', Age: 41, FatherName: 'Sopien', Address: '10th street', Place: 'Chennai', DateOfBirth: '01/02/1976', Gender: 'Male', Email: 'tuckeran@gmail.com', Phone1: 9982173454, Phone2: 9988221146,
  Education: [
    {id: 1, InstituteName: 'V.S.D Jain Hr.Secondary School', EducationType: 'State Board', Percentage: 62, YearOfCompletion: 1999},
    {id: 2, InstituteName: 'G.D Vaishnav College', EducationType: 'Arts & Science', Percentage: 55.5, YearOfCompletion: 1999},
    {id: 3, InstituteName: 'Sai Ram Engineering College', EducationType: 'Engineering', Percentage: 60, YearOfCompletion: 1999}
  ]
}
];
}
}
