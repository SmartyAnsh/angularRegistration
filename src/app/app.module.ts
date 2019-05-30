import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OriginationService} from './origination.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './origination/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckbox, MatCheckboxModule, MatInputModule, MatListModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { ListUserComponent } from './origination/list-user/list-user.component';
import { ShowUserComponent } from './origination/show-user/show-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'getUser/:id',
    component: ShowUserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListUserComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OriginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
