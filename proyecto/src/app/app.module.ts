import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //{provide: CursoService, useExisting: CursoAlphaService},
    // {provide: CursoService, useClass: CursoAlphaService},
    // {provide: CursoService, useValue: cursos},
    // {provide: CursoService, useFactory: () => {
    //   if(environment.proveedor == 'legacy'){
    //     return new CursoService();
    //   }else if(environment.proveedor == 'experimental'){
    //     return new CursoAlphaService();
    //   }else if(environment.proveedor == 'valor predefinido'){
    //     return cursos
    //   }else{
    //     return new CursoService();
    //   }
    // }}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
