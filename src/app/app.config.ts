import { ApplicationConfig, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Routes } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = 
{
  providers: [provideHttpClient()]
}
@NgModule({
  imports: [
    ProductComponent,
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent],
})



export class AppServerModule {}
