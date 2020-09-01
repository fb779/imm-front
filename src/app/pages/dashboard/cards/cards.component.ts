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
      img: `assets/images/card-user-profile.svg`,
      sub_title: `Profile`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `primary`,
      link: "/pages/profile",
    },
    {
      img: `https://picsum.photos/200/300?random=2`,
      sub_title: `Assessment-Form`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `info`,
      link: "/pages/assessment-form",
    },
    {
      img: `https://picsum.photos/200/300?random=2`,
      sub_title: `Forms & Guides`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `warning`,
      link: "/pages/forms-guides",
    },
    {
      img: `https://picsum.photos/200/300?random=2`,
      sub_title: `My Documents`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `danger`,
      link: "/pages/documents",
    },
    {
      img: `https://picsum.photos/200/300?random=2`,
      sub_title: `My Family`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `primary`,
      link: "/pages/family",
    },
    {
      img: `https://picsum.photos/200/300?random=2`,
      sub_title: `My Consultant`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `info`,
      link: "/pages/my-consultant",
    },
    {
      img: `https://picsum.photos/200/300?random=2`,
      sub_title: `Messages`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,facere.`,
      accent: `warning`,
      link: "/pages/messages",
    },
  ];

  constructor(private _router: Router) {}

  ngOnInit() {}

  goto(link: string) {
    this._router.navigate([link]);
  }
}
