import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserCommentService } from './client/Mon-Service/user-comment.service';
import { UserFeedbackService } from './client/Mon-Service/user-feedback.service';
import { UserReactionService } from './client/Mon-Service/user-reaction.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserCommentService,
    UserFeedbackService,
    UserReactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
