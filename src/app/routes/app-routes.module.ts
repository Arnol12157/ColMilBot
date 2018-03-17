import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {TypographyPageComponent} from '../pages/typography-page/typography-page.component';
import {ColorPageComponent} from '../pages/color-page/color-page.component';
import {ButtonsPageComponent} from '../pages/buttons-page/buttons-page.component';
import {FormElementsPageComponent} from '../pages/form-elements-page/form-elements-page.component';
import {FormWizardPageComponent} from '../pages/form-wizard-page/form-wizard-page.component';
import {ChipsPageComponent} from '../pages/chips-page/chips-page.component';
import {DialogPageComponent} from '../pages/dialog-page/dialog-page.component';
import {GridListPageComponent} from '../pages/grid-list-page/grid-list-page.component';
import {IconsPageComponent} from '../pages/icons-page/icons-page.component';
import {ListPageComponent} from '../pages/list-page/list-page.component';
import {MenuPageComponent} from '../pages/menu-page/menu-page.component';
import {ProgressBarPageComponent} from '../pages/progress-bar-page/progress-bar-page.component';
import {SpinnerPageComponent} from '../pages/spinner-page/spinner-page.component';
import {SnackbarPageComponent} from '../pages/snackbar-page/snackbar-page.component';
import {TabPageComponent} from '../pages/tab-page/tab-page.component';
import {ToolbarPageComponent} from '../pages/toolbar-page/toolbar-page.component';
import {TooltipPageComponent} from '../pages/tooltip-page/tooltip-page.component';
import {NgModule} from '@angular/core';
import {SidenavPageComponent} from '../pages/sidenav-page/sidenav-page.component';
import {FlexLayoutPageComponent} from '../pages/flex-layout-page/flex-layout-page.component';
import {CardsPageComponent} from '../pages/cards-page/cards-page.component';
import {LineChartPageComponent} from '../pages/line-chart-page/line-chart-page.component';
import {BarChartPageComponent} from '../pages/bar-chart-page/bar-chart-page.component';
import {BubbleChartPageComponent} from '../pages/bubble-chart-page/bubble-chart-page.component';
import {HeatmapPageComponent} from '../pages/heatmap-page/heatmap-page.component';
import {PieChartPageComponent} from '../pages/pie-chart-page/pie-chart-page.component';
import {RadarPageComponent} from '../pages/radar-page/radar-page.component';
import {TablePageComponent} from '../pages/table-page/table-page.component';
import {ScrollPageComponent} from '../pages/scroll-page/scroll-page.component';
import {FileUploadPageComponent} from '../pages/file-upload-page/file-upload-page.component';
import {StepperPageComponent} from '../pages/stepper-page/stepper-page.component';
import {ChatPageComponent} from '../pages/chat-page/chat-page.component';
import {TestimonialsPageComponent} from '../pages/testimonials-page/testimonials-page.component';
import {PricingTablesPageComponent} from '../pages/pricing-tables-page/pricing-tables-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';
import {ProductPageComponent} from '../pages/product-page/product-page.component';
import {CartPageComponent} from '../pages/cart-page/cart-page.component';
import {PortfolioPageComponent} from '../pages/portfolio-page/portfolio-page.component';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {SignUpPageComponent} from '../pages/sign-up-page/sign-up-page.component';
import {MultiLanguagePageComponent} from '../pages/multi-language-page/multi-language-page.component';
import { GestionUsuariosPageComponent } from '../pages/gestion-usuarios-page/gestion-usuarios-page.component';
import { AuthGuard } from '../auth/auth.guard';

const APP_ROUTES: Routes = [
    {path: 'usuarios', component: MainPageComponent, children: [
          {path: 'crear', component: FormWizardPageComponent, canActivate: [AuthGuard]},
          {path: 'gestion', component: GestionUsuariosPageComponent, canActivate: [AuthGuard]}
        ]
    },
  {
    path: 'main', component: MainPageComponent, children: [
    {path: 'dashboard', component: DashboardPageComponent},
    {path: 'typography', component: TypographyPageComponent},
    {path: 'color', component: ColorPageComponent},
    {path: 'buttons', component: ButtonsPageComponent},
    {path: 'form-elements', component: FormElementsPageComponent},
    {path: 'form-wizard', component: FormWizardPageComponent},
    {path: 'chips', component: ChipsPageComponent},
    {path: 'dialog', component: DialogPageComponent},
    {path: 'grid-list', component: GridListPageComponent},
    {path: 'icons', component: IconsPageComponent},
    {path: 'list', component: ListPageComponent},
    {path: 'menu', component: MenuPageComponent},
    {path: 'progress-bar', component: ProgressBarPageComponent},
    {path: 'spinner', component: SpinnerPageComponent},
    {path: 'snackbar', component: SnackbarPageComponent},
    {path: 'tabs', component: TabPageComponent},
    {path: 'toolbar', component: ToolbarPageComponent},
    {path: 'tooltip', component: TooltipPageComponent},
    {path: 'sidenav', component: SidenavPageComponent},
    {path: 'flex-layout', component: FlexLayoutPageComponent},
    {path: 'cards', component: CardsPageComponent},
    {path: 'line-chart', component: LineChartPageComponent},
    {path: 'bar-chart', component: BarChartPageComponent},
    {path: 'bubble-chart', component: BubbleChartPageComponent},
    {path: 'heatmap', component: HeatmapPageComponent},
    {path: 'piechart', component: PieChartPageComponent},
    {path: 'radar', component: RadarPageComponent},
    {path: 'tree', loadChildren: 'app/pages/tree-page/tree-page.module#TreePageModule'},
    {path: 'editor', loadChildren: 'app/pages/editor-page/editor-page.module#EditorPageModule'},
    {path: 'table', component: TablePageComponent},
    {path: 'scroll', component: ScrollPageComponent},
    {path: 'drag', loadChildren: 'app/pages/drag-and-drop-page/drag-and-drop-page.module#DragAndDropPageModule'},
    {path: 'datepicker', loadChildren: 'app/pages/datepicker-page/datepicker-page.module#DatepickerPageModule'},
    {path: 'fileupload', component: FileUploadPageComponent},
    {path: 'stepper', component: StepperPageComponent},
    {path: 'google-maps', loadChildren: 'app/pages/google-map-page/google-map-page.module#GoogleMapPageModule'},
    {path: 'chat', component: ChatPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'pricing-tables', component: PricingTablesPageComponent},
    {path: 'products', component: ProductsPageComponent},
    {path: 'product', component: ProductPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'portfolio', component: PortfolioPageComponent},
    {path: 'multi-language', component: MultiLanguagePageComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'prefix'}
  ]
  },
  {path: '404', component: PageNotFoundComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: '', redirectTo: '/main/dashboard', pathMatch: 'prefix'},
  {path: '**', redirectTo: '/main/dashboard', pathMatch: 'prefix'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
