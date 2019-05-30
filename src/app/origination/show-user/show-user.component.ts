import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {OriginationService} from "../../origination.service";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit, OnDestroy {

  user: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private originationService: OriginationService) {
  }

  ngOnInit() {
    /*this.originationService.getUser("5bbcba8efa9c47ba2ddb124d").subscribe(data => {
      this.user = data;
    });*/
    this.sub = this.route.params.subscribe(params => {
      this.originationService.getUser(params.id).subscribe((user: any) => {
        if (user) {
          this.user = user;
        } else {
          console.log('No User found');
        }
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
