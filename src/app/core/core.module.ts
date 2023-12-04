import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { loaderInterceptor } from './interceptor/loader.interceptor';
import { tokenInterceptor } from './interceptor/token.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS, useClass: loaderInterceptor, multi: true
    }
  ],
  exports: [
    SpinnerComponent
  ]
  
})
export class CoreModule { }
