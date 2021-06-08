import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import dos modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
//import { StorageService } from './services/storage.service';





//import das pages e components
import { HomeComponent } from './views/home/home.component';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';
import { CreateAgendamentoComponent } from './components/agendamento/create-agendamento/create-agendamento.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { AgendamentoReadComponent } from './components/agendamento/agendamento-read/agendamento-read.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AgendamentoComponent,
    CreateAgendamentoComponent,
    LoginComponent,
    CadastroComponent,
    AgendamentoReadComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //StorageService,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-br'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
