import { PetsService } from 'src/app/services/pets.service';
import { ClienteService } from './services/cliente.service';
import { ProdutoService } from './services/produto.service';
import { VendaService } from './services/venda.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent, 
        public router: Router,
        public vendaService: VendaService,
        public produtoService: ProdutoService,
        public clienteService: ClienteService,
        public petsService: PetsService
        ) {}

    ngOnInit() {
        this.model = [
            {label: 'Menu', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            
            {label:'Cadastros', icon:'pi pi-fw pi-check-square', routerLink: ['/cadastro'],
            items: [
                {label: 'Clientes', icon:'pi pi-user-edit', routerLink: ['/cadastro-cliente']},
                {label: 'Pets', icon:'pi pi-github', routerLink: ['/cadastro-pets']},
                {label: 'Produtos', icon:'pi pi-shopping-bag', routerLink: ['/cadastro-produtos']},
                {label: 'Marca', icon:'pi pi-ticket', routerLink: ['/cadastro-marca']},
                {label: 'Pagamento', icon:'pi pi-dollar', routerLink: ['/cadastro-pagamento']},
                {label: 'Usuário', icon:'pi pi-user-plus', routerLink: ['/cadastro-usuario']},
                ]
            },
           
            {label:'Consulta', icon:'pi pi-eye', routerLink:['/consulta'],
            items: [
                {label: 'Clientes', icon:'pi pi-users', routerLink: ['/consulta-cliente']},
                {label: 'Pets', icon:'pi pi-github', routerLink: ['/consulta-pets']},
                {label: 'Produtos', icon:'pi pi-shopping-bag', routerLink: ['/consulta-produtos']},
                {label: 'Marca', icon:'pi pi-ticket', routerLink: ['/consulta-marca']},
                {label: 'Pagamento', icon:'pi pi-dollar', routerLink: ['/consulta-pagamento']},
                {label: 'Usuário', icon:'pi pi-user', routerLink: ['/consulta-usuario']},

                 ]
             },

             {
                label: 'Vendas', icon: 'pi pi-shopping-cart', routerLink: ['/venda'],
                items: [
                    {label: 'Lançamento de Venda', icon: 'pi pi-sign-in', routerLink: ['/lancamento-venda']},
                    {label: 'Consulta de Venda', icon: 'pi pi-search', routerLink: ['/consulta-venda']},
        
                ]
            },
            {
                label: 'Movimentação', icon: 'pi pi-cloud', routerLink: ['/estoque'],
                items: [
                    {label: 'Movimentação de Estoque', icon: 'pi pi-cloud-download', routerLink: ['/entrada-movimentacao']},
                    {label: 'Consulta de Estoque', icon: 'pi pi-search', routerLink: ['/consulta-movimentacao']},
        
                ]
            },
            {
                label: 'Agendamento', icon: 'pi pi-calendar', routerLink: ['/agendamento'],
                items: [
                    {label: 'Lançar Agendamento', icon: 'pi pi-calendar-plus', routerLink: ['/cadastro-agendamento']},
                    {label: 'Consulta de Agendamento', icon: 'pi pi-search', routerLink: ['/cosulta-agendamento']},
        
                ]
            },
            {
                label: 'Relatórios', icon: 'pi pi-file', routerLink: ['/'],
                items: [
                    {label: 'Relatório de Cliente', icon: 'pi pi-users', command: (event) => { this.relatorioCliente()} },
                   /*  {label: 'Relatório de Cliente/endereço', icon: 'pi pi-users', routerLink: ['/']}, */
                 /*    {label: 'Relatório de Pets', icon: 'pi pi-github', command: (event) => { this.relatorioPets()} }, */
                    {label: 'Relatório de Produtos', icon: 'pi pi-shopping-bag', command: (event) => { this.relatorioProduto()} },
                    {label: 'Relatório de Vendas', icon: 'pi pi-server',  command: (event) => { this.relatorioVenda()}  },
                   /*  {label: 'Relatório de Estoque', icon: 'pi pi-list', routerLink: ['/']}, */
                  
                ]
            },
            
          /*   {
                label: 'UI Kit', icon: 'pi pi-fw pi-star-fill', routerLink: ['/uikit'],
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                    {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
                    {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                ]
            }, */
       /*      {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
                items: [
                    {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
                    {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
                    {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
                    {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
                    {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
                    {label: 'Widgets', icon: 'pi pi-fw pi-star', routerLink: ['utilities/widgets']},
                    {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
                    {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
                    {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
                ]
            }, */
            {
                label: 'Opções', icon: 'pi pi-cog', routerLink: ['/pages'],
                items: [
                    /* {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                    { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' }, */
                    { label: 'Sair', icon: 'pi pi-fw pi-sign-in', command: (event) => { this.sair()} , target: '_blank' },
                   /*  { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' },
                    { label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank' },
                    {label: 'Access Denied', icon: 'pi pi-fw pi-ban', routerLink: ['/accessdenied'], target: '_blank'},
                    { label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty'] }, */
                ]
            },
           /*  {
                label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Docs', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']
            },
            {
                label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
            } */
        ];
    }

    onMenuClick() {
        this.appMain.menuClick = true;
    }

    sair(){
        localStorage.removeItem("usuario");
        this.router.navigate(['/login']);
    }

    async relatorioVenda(){
        await this.vendaService.relatorioPDF()
        .then(result => {
           
            const fileURL = URL.createObjectURL(result);
            window.open(fileURL, '_blank');
        })
    }

    async relatorioProduto(){
        await this.produtoService.relatorioPDF()
        .then(result => {
           
            const fileURL = URL.createObjectURL(result);
            window.open(fileURL, '_blank');
        })
    }

    async relatorioCliente(){
        await this.clienteService.relatorioPDF()
        .then(result => {
           
            const fileURL = URL.createObjectURL(result);
            window.open(fileURL, '_blank');

        })
    }

    async relatorioPets(){
        await this.petsService.relatorioPDF()
        .then(result => {
           
            const fileURL = URL.createObjectURL(result);
            window.open(fileURL, '_blank');

        })
    }
}
