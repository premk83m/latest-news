import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExportProductsComponent } from './export-products/export-products.component';
import { BlogComponent } from './blog/blog.component';
import { ManageBlogComponent } from './admin/manage-blog/manage-blog.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { EditBlogComponent } from './admin/edit-blog/edit-blog.component';
import { ViewBlogComponent } from './admin/view-blog/view-blog.component';
import { ListViewComponent } from './admin/list-view/list-view.component';
import { ListblogViewComponent } from './listblog-view/listblog-view.component';
import { GridViewComponent } from './admin/grid-view/grid-view.component';
import { GridblogViewComponent } from './gridblog-view/gridblog-view.component';
import { ProductListComponent } from './excercise/product-list/product-list.component';
import { StudentListComponent } from './excercise/student-list/student-list.component';
import { DoctorListComponent } from './excercise/doctor-list/doctor-list.component';
import { InstitutionListComponent } from './excercise/institution-list/institution-list.component';
import { CustomFunctionsComponent } from './excercise/custom-functions/custom-functions.component';
import { BuildinFunctionsComponent } from './excercise/buildin-functions/buildin-functions.component';
import { UserRegisterationComponent } from './excercise/user-registeration/user-registeration.component';
import { CardPaymentComponent } from './excercise/card-payment/card-payment.component';
import { HospitalAdmissionComponent } from './excercise/hospital-admission/hospital-admission.component';
import { MasterEntriesComponent } from './excercise/master-entries/master-entries.component';
import { ListTrainersComponent } from './excercise/list-trainers/list-trainers.component';

const routes: Routes = [
   {path: 'excercise/products/list', component: ProductListComponent},
   {path: 'excercise/students/list', component: StudentListComponent},
   {path: 'excercise/doctors/list', component: DoctorListComponent},
   {path: 'excercise/institution/profile', component: InstitutionListComponent},
   {path: 'excercise/custom-functions', component: CustomFunctionsComponent},
   {path: 'excercise/buildin-functions', component: BuildinFunctionsComponent},
   {path: 'excercise/user/registeration', component: UserRegisterationComponent},
   {path: 'excercise/user/cart/payment', component: CardPaymentComponent},
   {path: 'excercise/user/hospital/admission', component: HospitalAdmissionComponent},
   {path: 'excercise/master/navigation', component: MasterEntriesComponent},
   {path: 'excercise/list/trainers', component: ListTrainersComponent},
  {path: '', component: HomeComponent,
  data : {title: 'Title for Home Component',
          descrption: 'Description of First Component',
          robots: 'noindex, nofollow',
          ogTitle: 'Description of First Component for social media',
          canonical: '/home',
  }
},
  {path: 'export-products', component: ExportProductsComponent,
  data : {title: 'Title for Export Component',
          descrption: 'Description of Export Component',
          robots: 'noindex, nofollow',
          ogTitle: 'Description of Export Component for social media',
          canonical: '/export-products',
  }
},
  {path: 'news', component: BlogComponent,
  data: {title: 'Title for Blog Component',
        descrption: 'Description of Blog Component',
        robots: 'index, follow',
        ogTitle: 'Description of Blog Component for social media',
        canonical: '/news',

},
  children: [
    {path: '', component: GridblogViewComponent},
    {path: 'gridblog-view', component: GridblogViewComponent},
    {path: 'listblog-view', component: ListblogViewComponent},
  ]
},
  {path: 'admin/manage-news', component: ManageBlogComponent,
  data: {title: 'Title for Manage Blog Component'},
  children: [
    {path: '', component: ViewBlogComponent},
    {path: 'add-blog', component: AddBlogComponent,
    data: {title: 'Title for Add blog Component',
          descrption: 'Description of Add Blog Component',
          robots: 'noindex, nofollow',
          ogTitle: 'Description of Add Blog Component for social media',
          canonical: '/add-blog',
  }},
    {path: 'edit-blog/:id', component: EditBlogComponent,
    data: {title: 'Title for edit blog Component',
          descrption: 'Description of edit blog Component',
          robots: 'noindex, nofollow',
          ogTitle: 'Description of edit blog Component for social media',
          canonical: '/edit-blog',
  }},
    {path: 'view-news', component: ViewBlogComponent,
    data: {title: 'Title for View blog Component',
          descrption: 'Description of View Blog Component',
          robots: 'noindex, nofollow',
          ogTitle: 'Description of View Blog Component for social media',
          canonical: '/view-news',
  },
    children: [
      {path: '', component: GridViewComponent},
      {path: 'grid-view', component: GridViewComponent},
      {path: 'list-view', component: ListViewComponent},
    ]
  },
  {path: 'list-view', component: ListViewComponent},
  ]
  },
  {path: '404', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
