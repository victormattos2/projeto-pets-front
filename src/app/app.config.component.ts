import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <a href="#" class="layout-config-button" (click)="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div id="layout-config" class="layout-config" [ngClass]="{'layout-config-exit-done': !appMain.configActive,
        'layout-config-enter-done': appMain.configActive}" [@children]="appMain.configActive ? 'visibleAnimated' : 'hiddenAnimated'">
            <div class="layout-config-content">
                <a href="#" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="pi pi-times"></i>
                </a>
                <p-tabView id="config-form-tabs">
                    <p-tabPanel header="Light or Dark">
                        <h1>Light or Dark</h1>
                        <p>Mirage offers all dark dashboard &amp; theme design for dark lovers.</p>
                        <div class="p-grid p-justify-center p-align-center">
                            <div class="p-col p-col-fixed">
                                <a href="#" class="layout-config-option layout-config-option-image" (click)="changeLayout($event, false)">
                                    <img src="assets/layout/images/configurator/choice-light.png" alt="mirage-layout" style="width:100%"/>
                                    <span class="layout-config-option-text">Light</span>
                                    <i class="pi pi-check" *ngIf="!app.darkMode"></i>
                                </a>
                            </div>
                            <div class="p-col p-col-fixed p-md-offset-1">
                                <a href="#" class="layout-config-option layout-config-option-image" (click)="changeLayout($event, true)">
                                    <img src="assets/layout/images/configurator/choice-dark.png" alt="mirage-layout" style="width:100%"/>
                                    <span class="layout-config-option-text">Dark</span>
                                    <i class="pi pi-check" *ngIf="app.darkMode"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Menu">
                        <div class="layout-config-subtitle">Mode</div>
                        <div class="p-grid">
                            <div class="p-col p-col-fixed">
                                <a href="#" class="layout-config-option layout-config-option-image"
                                   (click)="changeMenuToHorizontal($event,true)">
                                    <img src="assets/layout/images/configurator/menu/horizontal.png" alt="mirage-layout" style="width:100%"/>
                                    <span class="layout-config-option-text">Horizontal</span>
                                    <i class="pi pi-check" *ngIf="app.horizontalMenu"></i>
                                </a>
                            </div>
                            <div class="p-col p-col-fixed">
                                <a href="#" class="layout-config-option layout-config-option-image"
                                   (click)="changeMenuToHorizontal($event,false)">
                                    <img src="assets/layout/images/configurator/menu/overlay.png" alt="mirage-layout" style="width:100%"/>
                                    <span class="layout-config-option-text">Overlay</span>
                                    <i class="pi pi-check" *ngIf="!app.horizontalMenu"></i>
                                </a>
                            </div>
                        </div>
                        <div class="layout-config-subtitle">Color</div>
                        <div class="p-grid">
                            <div class="p-col p-col-fixed" *ngFor="let menuColor of menuColors">
                                <a href="#" class="layout-config-option layout-config-option-image"
                                   (click)="changeMenuColor($event,menuColor.name)">
                                    <img src="assets/layout/images/configurator/menu/{{menuColor.name}}.png" alt="{{menuColor.name}}"/>
                                    <span class="layout-config-option-text">{{menuColor.name}}</span>
                                    <i class="pi pi-check" *ngIf="menuColor.name === app.menuColorMode"></i>
                                </a>
                            </div>
                        </div>
                        <div class="layout-config-subtitle">Theme</div>
                        <div class="p-grid">
                            <div class="p-col p-col-fixed" *ngFor="let menuTheme of selectedColorOptions">
                                <a href="#" class="layout-config-option layout-config-option-image layout-config-option-theme"
                                   (click)="changeMenuTheme($event,menuTheme.file)">
                                    <img src="assets/layout/images/configurator/menu/theme/{{menuTheme.image}}" alt="{{menuTheme.name}}"/>
                                    <i class="pi pi-check" *ngIf="app.menuColorMode === 'custom' && 'layout-menu-'+menuTheme.file === app.menuColor"></i>
                                    <i class="pi pi-check" *ngIf="app.menuColorMode !== 'custom' && menuTheme.file === app.layoutColor"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Components">
                        <div class="p-grid">
                            <div class="p-col-12 p-md-6">
                                <div class="layout-config-subtitle">Input Style</div>
                                <div class="p-formgroup-inline">
                                    <div class="p-field-radiobutton">
                                        <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                                        <label for="inputStyle1">Outlined</label>
                                    </div>
                                    <div class="p-field-radiobutton">
                                        <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                                        <label for="inputStyle2">Filled</label>
                                    </div>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-6">
                                <div class="layout-config-subtitle">Ripple Effect</div>
                                <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>
                            </div>
                        </div>
                        
                        <div class="layout-config-subtitle">Component Themes</div>
                        <div class="p-grid">
                            <div class="p-col p-col-fixed" *ngFor="let componentTheme of componentThemes">
                                <a href="#" class="layout-config-option layout-config-option-image layout-config-option-theme"
                                   (click)="changeComponentTheme($event,componentTheme.file)">
                                    <img src="assets/layout/images/configurator/theme/{{componentTheme.image}}" alt="{{componentTheme.name}}"/>
                                    <i class="pi pi-check" *ngIf="componentTheme.file === app.themeColor"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                opacity: 0,
                transform: ' translateX(-50%) translateY(-50%)'
            })),
            state('visibleAnimated', style({
                opacity: 1,
                transform: 'translateX(-50%) translateY(-50%) scale(1)',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)'))
        ])
    ]
})
export class AppConfigComponent implements OnInit {
    darkColors: any;
    lightColors: any;
    customColors: any;
    menuColors: any;
    selectedColorOptions: any;
    componentThemes: any;
    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

    ngOnInit() {
        this.lightColors = [
            {name: 'Blue', file: 'blue', image: 'blue.svg'},
            {name: 'Green', file: 'green', image: 'green.svg'},
            {name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
            {name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
            {name: 'Purple', file: 'purple', image: 'purple.svg'},
            {name: 'Orange', file: 'orange', image: 'orange.svg'},
            {name: 'Teal', file: 'teal', image: 'teal.svg'},
            {name: 'Magenta', file: 'magenta', image: 'magenta.svg'},
            {name: 'Lime', file: 'lime', image: 'lime.svg'},
            {name: 'Brown', file: 'brown', image: 'brown.svg'},
            {name: 'Red', file: 'red', image: 'red.svg'},
            {name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
        ];
        this.darkColors = [
            {name: 'Blue', file: 'blue', image: 'blue.svg'},
            {name: 'Green', file: 'green', image: 'green.svg'},
            {name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
            {name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
            {name: 'Purple', file: 'purple', image: 'purple.svg'},
            {name: 'Orange', file: 'orange', image: 'orange.svg'},
            {name: 'Teal', file: 'teal', image: 'teal.svg'},
            {name: 'Magenta', file: 'magenta', image: 'magenta.svg'},
            {name: 'Lime', file: 'lime', image: 'lime.svg'},
            {name: 'Brown', file: 'brown', image: 'brown.svg'},
            {name: 'Red', file: 'red', image: 'red.svg'},
            {name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
        ];
        this.customColors = [
            {name: 'Chile', file: 'chile', image: 'chile.png'},
            {name: 'Naples', file: 'naples', image: 'naples.png'},
            {name: 'Georgia', file: 'georgia', image: 'georgia.png'},
            {name: 'Infinity', file: 'infinity', image: 'infinity.png'},
            {name: 'Chicago', file: 'chicago', image: 'chicago.png'},
            {name: 'Majesty', file: 'majesty', image: 'majesty.png'},
            {name: 'Fish', file: 'fish', image: 'fish.png'},
            {name: 'Dawn', file: 'dawn', image: 'dawn.png'},
            {name: 'Record', file: 'record', image: 'record.png'},
            {name: 'Pool', file: 'pool', image: 'pool.png'},
            {name: 'Metal', file: 'metal', image: 'metal.png'},
            {name: 'China', file: 'china', image: 'china.png'},
            {name: 'Table', file: 'table', image: 'table.png'},
            {name: 'Panorama', file: 'panorama', image: 'panorama.png'},
            {name: 'Barcelona', file: 'barcelona', image: 'barcelona.png'},
            {name: 'Underwater', file: 'underwater', image: 'underwater.png'},
            {name: 'Symmetry', file: 'symmetry', image: 'symmetry.png'},
            {name: 'Rain', file: 'rain', image: 'rain.png'},
            {name: 'Utah', file: 'utah', image: 'utah.png'},
            {name: 'Wave', file: 'wave', image: 'wave.png'},
            {name: 'Flora', file: 'flora', image: 'flora.png'},
            {name: 'Speed', file: 'speed', image: 'speed.png'},
            {name: 'Canopy', file: 'canopy', image: 'canopy.png'},
            {name: 'SanPaolo', file: 'sanpaolo', image: 'sanpaolo.png'},
            {name: 'Basketball', file: 'basketball', image: 'basketball.png'},
            {name: 'Misty', file: 'misty', image: 'misty.png'},
            {name: 'Summit', file: 'summit', image: 'summit.png'},
            {name: 'Wall', file: 'wall', image: 'wall.png'},
            {name: 'Ferris', file: 'ferris', image: 'ferris.png'},
            {name: 'Ship', file: 'ship', image: 'ship.png'},
            {name: 'NY', file: 'ny', image: 'ny.png'},
            {name: 'Cyan', file: 'cyan', image: 'cyan.png'},
            {name: 'Violet', file: 'violet', image: 'violet.png'},
            {name: 'Red', file: 'red', image: 'red.png'},
            {name: 'Blue', file: 'blue', image: 'blue.png'},
            {name: 'Porsuk', file: 'porsuk', image: 'porsuk.png'},
            {name: 'Pink', file: 'pink', image: 'pink.png'},
            {name: 'Purple', file: 'purple', image: 'purple.png'},
            {name: 'Orange', file: 'orange', image: 'orange.png'},
        ];
        this.menuColors = [
            {name: 'light'},
            {name: 'custom'},
            {name: 'dark'}
        ];
        this.selectedColorOptions = this.lightColors;
        this.componentThemes = [
            {name: 'Blue', file: 'blue', image: 'blue.svg'},
            {name: 'Green', file: 'green', image: 'green.svg'},
            {name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
            {name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
            {name: 'Purple', file: 'purple', image: 'purple.svg'},
            {name: 'Orange', file: 'orange', image: 'orange.svg'},
            {name: 'Teal', file: 'teal', image: 'teal.svg'},
            {name: 'Magenta', file: 'magenta', image: 'magenta.svg'},
            {name: 'Lime', file: 'lime', image: 'lime.svg'},
            {name: 'Brown', file: 'brown', image: 'brown.svg'},
            {name: 'Red', file: 'red', image: 'red.svg'},
            {name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
        ];
    }
    changeLayout(event, mode) {
        this.app.darkMode = mode;
        if (mode === true) {
            this.app.menuColorMode = 'dark';
            this.app.menuColor = 'layout-menu-dark';
            this.selectedColorOptions = this.darkColors;
            this.app.layoutColor = this.selectedColorOptions[0].file;
            this.changeLightDarkLayout('layout-css', this.selectedColorOptions[0].file, 'layout-dark');
            this.changeLightDarkTheme('theme-css', 'theme-dark');
        } else {
            this.app.menuColorMode = 'light';
            this.app.menuColor = 'layout-menu-light';
            this.selectedColorOptions = this.lightColors;
            this.app.layoutColor = this.selectedColorOptions[0].file;
            this.changeLightDarkLayout('layout-css', this.selectedColorOptions[0].file, 'layout-light');
            this.changeLightDarkTheme('theme-css', 'theme-light');
        }
        event.preventDefault();
    }
    changeLightDarkTheme(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value + '.css';
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }
    changeLightDarkLayout(id, color, mode) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 2] = color;
        urlTokens[urlTokens.length - 1] = mode + '.css';
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }
    changeMenuToHorizontal(event, mode) {
        this.app.horizontalMenu = mode;
        event.preventDefault();
    }
    changeMenuColor(event, mode) {
        this.app.menuColorMode = mode;
        if (mode !== 'custom') {
            this.app.menuColor = 'layout-menu-' + mode;
            if (mode === 'dark') {
                this.selectedColorOptions = this.darkColors;
                this.app.layoutColor = this.selectedColorOptions[0].file;
                this.changeStyleSheetsColor('layout-css', this.selectedColorOptions[0].file);
            } else {
                this.selectedColorOptions = this.lightColors;
                this.app.layoutColor = this.selectedColorOptions[0].file;
                this.changeStyleSheetsColor('layout-css', this.selectedColorOptions[0].file);
            }
        } else {
            this.app.menuColor = 'layout-menu-' + this.customColors[0].file;
            this.selectedColorOptions = this.customColors;
        }
        event.preventDefault();
    }
    changeMenuTheme(event, color) {
        if (this.app.menuColorMode !== 'custom') {
            this.changeStyleSheetsColor('layout-css', color);
            this.app.layoutColor = color;
        } else {
            this.app.menuColor = 'layout-menu-' + color;
        }
        event.preventDefault();
    }
    changeComponentTheme(event, color) {
        this.app.themeColor = color;
        this.changeStyleSheetsColor('theme-css', color);
        event.preventDefault();
    }
    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 2] = value;
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }
    onConfigButtonClick(event) {
        this.appMain.configActive = true;
        event.preventDefault();
    }
    onConfigCloseClick(event) {
        this.appMain.configActive = false;
        event.preventDefault();
    }
    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }
    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }
}
