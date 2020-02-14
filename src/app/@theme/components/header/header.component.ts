import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {


  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    // {
    //   value: 'default',
    //   name: 'Light',
    // },
    {
      value: 'dark',
      name: 'Dark',
    },
    // {
    //   value: 'cosmic',
    //   name: 'Cosmic',
    // },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  // currentTheme = 'dark';
  currentTheme = 'corporate';

  userMenu = [
    { title: 'Profile' },
    { title: 'Log out', link: 'pages/user/assessment-form', icon: 'edit-2-outline', }
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private authService: NbAuthService,

    ) {
      this.authService.onTokenChange().subscribe((token: any) => {

        if (token.isValid()) {
          let data = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
          console.log('Carga de informacion del usuario',data);
          this.user = data.user;
        }
      });
  }

  ngOnInit() {
    this.changeTheme(this.currentTheme);
    this.currentTheme = this.themeService.currentTheme;

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    const { xl, md } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        // map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        map(([, currentBreakpoint]) => currentBreakpoint.width < md),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => {
        this.userPictureOnly = isLessThanXl
      });

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
