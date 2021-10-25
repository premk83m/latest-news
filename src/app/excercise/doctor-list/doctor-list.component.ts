import { Component, OnInit } from '@angular/core';
class DoctorList{
  ID: number;
  DoctorName: string;
  Specialist: Specialist;
  Address: string;
  DateOfBirth: string;
  Gender: string;
  Email: string;
  Experience: Experience;
  Age: number;
}
class Specialist{
  Name: string;
  Year: string;
}
class Experience{
  HospitalName: string;
  StartDate: string;
  EndDate: string;
  YearOfExperience: number;
}
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: DoctorList[] = [
    {ID: 1, DoctorName: 'Aravind', Specialist: {Name: 'Cardiologist', Year: '2000'}, Address: 'Chennai', DateOfBirth: '7/4/1985', Gender: 'Male', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 18}, Age: 42},
    {ID: 2, DoctorName: 'Arunai', Specialist: {Name: 'Dentist', Year: '2002'}, Address: 'Ch', DateOfBirth: '7/4/1987', Gender: 'Female', Email: 'arunai@gmail.com', Experience: {HospitalName: 'D.G.V', StartDate: '2001', EndDate: '2020', YearOfExperience: 16}, Age: 40},
    {ID: 3, DoctorName: 'Arunk', Specialist: {Name: 'Audiologist', Year: '2004'}, Address: 'Chennai', DateOfBirth: '7/4/1989', Gender: 'Male', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 14}, Age: 38},
    {ID: 4, DoctorName: 'Arunaki', Specialist: {Name: 'Radiologist ', Year: '2006'}, Address: 'Che', DateOfBirth: '7/4/1991', Gender: 'Female', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 12}, Age: 36},
    {ID: 5, DoctorName: 'Arunkumar', Specialist: {Name: 'Pulmonologist ', Year: '2009'}, Address: 'Chenn', DateOfBirth: '7/4/1993', Gender: 'Male', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 10}, Age: 34},
    {ID: 6, DoctorName: 'Aravindan', Specialist: {Name: 'Cardiologist', Year: '2000'}, Address: 'Chennai', DateOfBirth: '7/4/1985', Gender: 'Male', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 18}, Age: 42},
    {ID: 7, DoctorName: 'Arunaiyi', Specialist: {Name: 'Dentist', Year: '2002'}, Address: 'Ch', DateOfBirth: '7/4/1987', Gender: 'Female', Email: 'arunai@gmail.com', Experience: {HospitalName: 'D.G.V', StartDate: '2001', EndDate: '2020', YearOfExperience: 16}, Age: 40},
    {ID: 8, DoctorName: 'Arunk', Specialist: {Name: 'Audiologist', Year: '2004'}, Address: 'Chennai', DateOfBirth: '7/4/1989', Gender: 'Male', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 14}, Age: 38},
    {ID: 9, DoctorName: 'Arunakiya', Specialist: {Name: 'Paediatrician', Year: '2006'}, Address: 'Che', DateOfBirth: '7/4/1991', Gender: 'Female', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 12}, Age: 36},
    {ID: 10, DoctorName: 'Arunkumar', Specialist: {Name: 'ENT ', Year: '2009'}, Address: 'Chenn', DateOfBirth: '7/4/1993', Gender: 'Male', Email: 'aravind@gmail.com', Experience: {HospitalName: 'D.G.V Hospital', StartDate: '2001', EndDate: '2020', YearOfExperience: 10}, Age: 34}
  ];

constructor() { }

ngOnInit(): void {
}

}
