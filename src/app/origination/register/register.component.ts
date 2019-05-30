import {Component, OnDestroy, OnInit} from '@angular/core';
import {OriginationService} from "../../origination.service";
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  user: any = {};

  successMsg: string;

  users: Array<any>;

  sub: Subscription;

  marketingChannelOptions: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private originationService: OriginationService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.originationService.getUser(id).subscribe((user: any) => {
          if (user) {
            this.user = user;
          } else {
            console.log(`User with id '${id}' not found, returning to list`);
            this.ngOnInit();
          }
        });
      }
      this.originationService.getAll().subscribe((users: any) => {
        if (users) {
          this.users = users;
        } else {
          console.log('No list found');
          this.ngOnInit();
        }
      });
      this.marketingChannelOptions = [{id: 1, name: 'TV'}, {id: 2, name: 'Advertisement'}];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.originationService.registerUser(form).subscribe(result => {
      console.log(result);
      if (result.error) {
        console.log(result.messages);
        Object.keys(result.messages).forEach(function (key) {

          $("[name='" + key + "']").append("<span style='color:red;'>" + result.messages[key] + "</span>");
        });

      } else {
        this.successMsg = result;
        this.router.navigate([""]);
      }
    }, error => console.error(error));
  }

  edit(id: string) {
    console.log("id to be edited - " + id)
    this.ngOnInit();
  }

  logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }

}
