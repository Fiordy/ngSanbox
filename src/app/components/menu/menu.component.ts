import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'calendar-outline',
    },
    {
      title: 'Saved drinks',
      icon: 'code-outline',
    },
    {
      title: 'Create',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

  ngOnInit(): void {
  }

}
