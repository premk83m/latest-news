import { BrowserModule, Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConstConfigService } from './const-config.service';
import { ContactService } from './services/contact.service';
import { SocialService } from './services/social.service';
import { AddblogService } from './admin/services/addblog.service';
import { ExpProductService } from './services/exp-product.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExportProductsComponent } from './export-products/export-products.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ManageBlogComponent } from './admin/manage-blog/manage-blog.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { EditBlogComponent } from './admin/edit-blog/edit-blog.component';
import { ViewBlogComponent } from './admin/view-blog/view-blog.component';
import { ListViewComponent } from './admin/list-view/list-view.component';
import { GridViewComponent } from './admin/grid-view/grid-view.component';
import { GridblogViewComponent } from './gridblog-view/gridblog-view.component';
import { ListblogViewComponent } from './listblog-view/listblog-view.component';
import { ProductListComponent } from './excercise/product-list/product-list.component';
import { StudentListComponent } from './excercise/student-list/student-list.component';
import { DoctorListComponent } from './excercise/doctor-list/doctor-list.component';
import { InstitutionListComponent } from './excercise/institution-list/institution-list.component';
import { CustomFunctionsComponent } from './excercise/custom-functions/custom-functions.component';
import { BuildinFunctionsComponent } from './excercise/buildin-functions/buildin-functions.component';
import { UserRegisterationComponent } from './excercise/user-registeration/user-registeration.component';
import { CardPaymentComponent } from './excercise/card-payment/card-payment.component';
import { HospitalAdmissionComponent } from './excercise/hospital-admission/hospital-admission.component';
import { UseLoginComponent } from './excercise/use-login/use-login.component';
import { MasterEntriesComponent } from './excercise/master-entries/master-entries.component';
import { EntriesService } from './excercise/master-entries/entries.service';
import { ListTrainersComponent } from './excercise/list-trainers/list-trainers.component';
import { TrainersService } from './excercise/list-trainers/trainers.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExportProductsComponent,
     HomeComponent,
    BlogComponent,
    ManageBlogComponent,
    AddBlogComponent,
    EditBlogComponent,
    ViewBlogComponent,
    ListViewComponent,
    GridViewComponent,
    GridblogViewComponent,
    ListblogViewComponent,
    ProductListComponent,
    StudentListComponent,
    DoctorListComponent,
    InstitutionListComponent,
    CustomFunctionsComponent,
    BuildinFunctionsComponent,
    UserRegisterationComponent,
    CardPaymentComponent,
    HospitalAdmissionComponent,
    UseLoginComponent,
    MasterEntriesComponent,
    ListTrainersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [
    Title, Meta,
    ConstConfigService,
    ContactService,
    SocialService,
    AddblogService,
    ExpProductService,
    EntriesService,
    TrainersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
