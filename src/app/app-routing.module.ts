import { LoginComponent } from './account/login/login.component';
import { ConsultaAgendamentoComponent } from './components/consulta-agendamento/consulta-agendamento.component';
import { ConsultaVendaComponent } from './components/consulta-venda/consulta-venda.component';
import { ConsultaMovimentacaoComponent } from './components/consulta-movimentacao/consulta-movimentacao.component';
import { EntradaMovimentacaoComponent } from './components/entrada-movimentacao/entrada-movimentacao.component';
import { ConsultaUsuarioComponent } from './components/consulta-usuario/consulta-usuario.component';
import { ConsultaPagamentoComponent } from './components/consulta-pagamento/consulta-pagamento.component';
import { LancamentoVendaComponent } from './components/lancamento-venda/lancamento-venda.component';
import { CadastroMarcaComponent } from './components/cadastro-marca/cadastro-marca.component';
import { ConsultaMarcaComponent } from './components/consulta-marca/consulta-marca.component';
import { ConsultaProdutosComponent } from './components/consulta-produtos/consulta-produtos.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { ConsultaPetsComponent } from './components/consulta-pets/consulta-pets.component';
import { CadastroPetsComponent } from './components/cadastro-pets/cadastro-pets.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';

import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';

import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import { CadastroPagamentoComponent } from './components/cadastro-pagamento/cadastro-pagamento.component';
import { CadastroAgendamentoComponent } from './components/cadastro-agendamento/cadastro-agendamento.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', 
                component: AppMainComponent,
                children: [
                    {path: 'cosulta-agendamento', component: ConsultaAgendamentoComponent },
                    {path: 'cadastro-agendamento', component: CadastroAgendamentoComponent },
                    {path: 'cadastro-agendamento/:id', component: CadastroAgendamentoComponent},
                    {path: 'consulta-movimentacao', component: ConsultaMovimentacaoComponent },
                    {path: 'entrada-movimentacao', component: EntradaMovimentacaoComponent},
                    {path: 'entrada-movimentacao/:id', component: EntradaMovimentacaoComponent},
                    {path: 'consulta-usuario', component: ConsultaUsuarioComponent},
                    {path: 'cadastro-usuario', component: CadastroUsuarioComponent },
                    {path: 'cadastro-usuario/:id', component: CadastroUsuarioComponent},
                    {path: 'consulta-pagamento', component: ConsultaPagamentoComponent},
                    {path: 'cadastro-pagamento', component: CadastroPagamentoComponent},
                    {path: 'cadastro-pagamento/:id', component: CadastroPagamentoComponent},
                    {path: 'consulta-venda', component: ConsultaVendaComponent},
                    {path: 'lancamento-venda', component: LancamentoVendaComponent},
                    {path: 'lancamento-venda/:id', component: LancamentoVendaComponent},
                    {path: 'cadastro-marca', component: CadastroMarcaComponent},
                    {path: 'consulta-marca', component: ConsultaMarcaComponent},
                    {path: 'cadastro-marca/:id', component: CadastroMarcaComponent},
                    {path: 'cadastro-produtos', component: CadastroProdutosComponent},
                    {path: 'consulta-produtos', component: ConsultaProdutosComponent},
                    {path: 'cadastro-produtos/:id', component: CadastroProdutosComponent},
                    {path: 'cadastro-cliente', component: CadastroClienteComponent},
                    {path: 'consulta-cliente', component: ConsultaClienteComponent},
                    {path: 'cadastro-cliente/:id', component: CadastroClienteComponent},
                    {path: 'cadastro-pets', component: CadastroPetsComponent},
                    {path: 'consulta-pets', component: ConsultaPetsComponent},
                    {path: 'cadastro-pets/:id', component: CadastroPetsComponent},
                    {path: '', component: DashboardDemoComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/menu', component: MenusDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/display', component: DisplayComponent},
                    {path: 'utilities/elevation', component: ElevationComponent},
                    {path: 'utilities/flexbox', component: FlexboxComponent},
                    {path: 'utilities/grid', component: GridComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'utilities/widgets', component: WidgetsComponent},
                    {path: 'utilities/spacing', component: SpacingComponent},
                    {path: 'utilities/typography', component: TypographyComponent},
                    {path: 'utilities/text', component: TextComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'components/charts', component: ChartsDemoComponent},
                    {path: 'components/file', component: FileDemoComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ]
            },
           
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: LoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
