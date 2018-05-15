import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomFormsModule} from 'ng2-validation';
import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentFileModule,
  CovalentMediaModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {TypographyPageComponent} from './pages/typography-page/typography-page.component';
import {ColorPageComponent} from './pages/color-page/color-page.component';
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {FormElementsPageComponent} from './pages/form-elements-page/form-elements-page.component';
import {FormWizardPageComponent} from './pages/form-wizard-page/form-wizard-page.component';
import {ChipsPageComponent} from './pages/chips-page/chips-page.component';
import {DialogPageComponent} from './pages/dialog-page/dialog-page.component';
import {GridListPageComponent} from './pages/grid-list-page/grid-list-page.component';
import {IconsPageComponent} from './pages/icons-page/icons-page.component';
import {ListPageComponent} from './pages/list-page/list-page.component';
import {MenuPageComponent} from './pages/menu-page/menu-page.component';
import {ProgressBarPageComponent} from './pages/progress-bar-page/progress-bar-page.component';
import {SpinnerPageComponent} from './pages/spinner-page/spinner-page.component';
import {SnackbarPageComponent} from './pages/snackbar-page/snackbar-page.component';
import {TabPageComponent} from './pages/tab-page/tab-page.component';
import {ToolbarPageComponent} from './pages/toolbar-page/toolbar-page.component';
import {TooltipPageComponent} from './pages/tooltip-page/tooltip-page.component';
import {SidenavPageComponent} from './pages/sidenav-page/sidenav-page.component';
import {FlexLayoutPageComponent} from './pages/flex-layout-page/flex-layout-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {LineChartPageComponent} from './pages/line-chart-page/line-chart-page.component';
import {BarChartPageComponent} from './pages/bar-chart-page/bar-chart-page.component';
import {BubbleChartPageComponent} from './pages/bubble-chart-page/bubble-chart-page.component';
import {HeatmapPageComponent} from './pages/heatmap-page/heatmap-page.component';
import {PieChartPageComponent} from './pages/pie-chart-page/pie-chart-page.component';
import {RadarPageComponent} from './pages/radar-page/radar-page.component';
import {TablePageComponent} from './pages/table-page/table-page.component';
import {ScrollPageComponent} from './pages/scroll-page/scroll-page.component';
import {FileUploadPageComponent} from './pages/file-upload-page/file-upload-page.component';
import {StepperPageComponent} from './pages/stepper-page/stepper-page.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {TestimonialsPageComponent} from './pages/testimonials-page/testimonials-page.component';
import {PricingTablesPageComponent} from './pages/pricing-tables-page/pricing-tables-page.component';
import {CartButtonComponent, ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {PortfolioPageComponent} from './pages/portfolio-page/portfolio-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SignUpPageComponent} from './pages/sign-up-page/sign-up-page.component';
import {PaletteComponent} from './pages/color-page/palette/palette.component';
import {DialogExampleComponent} from './pages/dialog-page/dialog-example.component';
import {SidemenuModule} from './sidemenu/sidemenu.module';
import {ResizeModule} from './resize/resize.module';
import {AppRoutesModule} from './routes/app-routes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiLanguagePageComponent} from './pages/multi-language-page/multi-language-page.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {PortalModule} from '@angular/cdk/portal';
import {NgxEchartsModule} from 'ngx-echarts';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import { GestionUsuariosPageComponent } from './pages/gestion-usuarios-page/gestion-usuarios-page.component';
import { GestionNoticiaComponent } from './pages/gestion-noticia/gestion-noticia.component';
import { RegistroNoticiaComponent } from './pages/registro-noticia/registro-noticia.component';
import { PresenciaUsuariosPageComponent } from './pages/presencia-usuarios-page/presencia-usuarios-page.component';
import { ChatModule } from './chat/chat.module';
import { ChartChatbotComponent } from './pages/chart-chatbot/chart-chatbot.component';
import { ChartIntentsComponent } from './pages/chart-intents/chart-intents.component';
import { GestionChatbotComponent } from './pages/gestion-chatbot/gestion-chatbot.component';
import { PortalIndexPageComponent } from './pages/portal-index-page/portal-index-page.component';
import { PortalFooterPageComponent } from './pages/portal-footer-page/portal-footer-page.component';
import { PortalHeaderPageComponent } from './pages/portal-header-page/portal-header-page.component';
import { PortalColminotasPageComponent } from './pages/portal-colminotas-page/portal-colminotas-page.component';
import { PortalContactosPageComponent } from './pages/portal-contactos-page/portal-contactos-page.component';
import { PortalGaleriaPageComponent } from './pages/portal-galeria-page/portal-galeria-page.component';
import { PortalPostulacionPageComponent } from './pages/portal-postulacion-page/portal-postulacion-page.component';
import { PortalArmasPageComponent } from './pages/portal-armas-page/portal-armas-page.component';
import { PortalColmilPageComponent } from './pages/portal-colmil-page/portal-colmil-page.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent, MainPageComponent, PageNotFoundComponent, DashboardPageComponent, TypographyPageComponent,
    ColorPageComponent, PaletteComponent, ButtonsPageComponent, FormElementsPageComponent, FormWizardPageComponent,
    ChipsPageComponent, DialogPageComponent, DialogExampleComponent, GridListPageComponent, IconsPageComponent,
    ListPageComponent, MenuPageComponent, ProgressBarPageComponent, SpinnerPageComponent, SnackbarPageComponent,
    TabPageComponent, ToolbarPageComponent, TooltipPageComponent, SidenavPageComponent, FlexLayoutPageComponent,
    CardsPageComponent, LineChartPageComponent, BarChartPageComponent, BubbleChartPageComponent, HeatmapPageComponent,
    PieChartPageComponent, RadarPageComponent,
    TablePageComponent, ScrollPageComponent, FileUploadPageComponent,
    StepperPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ChatPageComponent,
    TestimonialsPageComponent,
    PricingTablesPageComponent,
    ProductsPageComponent,
    CartButtonComponent,
    CartPageComponent,
    ProductPageComponent,
    PortfolioPageComponent,
    MultiLanguagePageComponent,
    GestionUsuariosPageComponent,
    GestionNoticiaComponent,
    RegistroNoticiaComponent,
    PresenciaUsuariosPageComponent,
    ChartChatbotComponent,
    ChartIntentsComponent,
    GestionChatbotComponent,
    PortalIndexPageComponent,
    PortalFooterPageComponent,
    PortalHeaderPageComponent,
    PortalColminotasPageComponent,
    PortalContactosPageComponent,
    PortalGaleriaPageComponent,
    PortalPostulacionPageComponent,
    PortalArmasPageComponent,
    PortalColmilPageComponent
  ],
  entryComponents: [
    DialogExampleComponent, CartButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
    SidemenuModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgxEchartsModule,
    CovalentMediaModule,
    CovalentFileModule,
    CovalentStepsModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentCommonModule,
    ResizeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule,
    AppRoutesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
      ChatModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
      AuthService,
      AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
