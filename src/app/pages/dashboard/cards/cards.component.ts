import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {
  data: any = [
    {
      img: `assets/images/account.svg`,
      sub_title: `Settings`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `primary`,
      link: "/pages/settings",
    },
    {
      img: `assets/images/assessment-form.svg`,
      sub_title: `Assessment-Form`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `info`,
      link: "/pages/assessment-form",
    },
    {
      img: `assets/images/forms-guides.svg`,
      sub_title: `Forms & Guides`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `warning`,
      link: "/pages/forms-guides",
    },
    {
      img: `assets/images/documents.svg`,
      sub_title: `My Documents`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `danger`,
      link: "/pages/documents",
    },
    {
      img: `assets/images/family.svg`,
      sub_title: `My Family`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `primary`,
      link: "/pages/family",
    },
    {
      img: `assets/images/consultant.svg`,
      sub_title: `My Consultant`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `info`,
      link: "/pages/my-consultant",
    },
    {
      img: `assets/images/messages.svg`,
      sub_title: `Messages`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `warning`,
      link: "/pages/messages",
    },
    {
      img: `assets/images/add-ons.svg`,
      sub_title: `Add-ons`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `danger`,
      link: "/pages/add-ons",
    },
  ];

  constructor(private _router: Router) {}

  ngOnInit() {}

  goto(link: string) {
    this._router.navigate([link]);
  }
}
