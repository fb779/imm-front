import { Component, OnDestroy, OnInit } from "@angular/core";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { map, takeUntil, filter, tap } from "rxjs/operators";
import { Subject } from "rxjs";

import { UserService } from "../../../services/services.index";
import { User } from "../../../models/User";
import { roles } from "../../../config/config";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: User = this._userService.user;

  themes = [
    {
      value: "dark",
      name: "Dark",
    },
    {
      value: "corporate",
      name: "Corporate",
    },
    // {
    //   value: 'default',
    //   name: 'Light',
    // },
    // {
    //   value: 'cosmic',
    //   name: 'Cosmic',
    // },
  ];

  currentTheme = "corporate";

  userMenu = [
    // { title: "Profile", link: "pages/profile", icon: "person-outline" },
    { title: "Log out", link: "auth/logout", icon: "power-outline" },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: NbAuthService,
    public _userService: UserService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        let dt = token.getPayload();
        this._userService.getUser(dt.sub).subscribe((user) => {
          // this.user = user;

          switch (user.role) {
            case roles.user:
              this.userMenu.unshift({
                title: "Profile",
                link: "consultant/profile",
                icon: "person-outline",
              });
              break;
            case roles.client:
              this.userMenu.unshift({
                title: "Profile",
                link: "pages/profile",
                icon: "person-outline",
              });
              break;
          }
        });
      }
    });
  }

  ngOnInit() {
    this.changeTheme(this.currentTheme);
    this.currentTheme = this.themeService.currentTheme;

    const { xl, md } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < md),
        takeUntil(this.destroy$)
      )
      .subscribe((isLessThanXl: boolean) => {
        this.userPictureOnly = isLessThanXl;
      });

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this._userService.clearStorage();
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
