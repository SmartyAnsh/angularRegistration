import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {OriginationService} from '../../origination.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, OnDestroy {

  users: Array<any>;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private originationService: OriginationService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.originationService.getAll().subscribe((users: any) => {
        if (users) {
          this.users = users;
        } else {
          console.log(`No list found`);
          this.ngOnInit();
        }
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showUser(id: string) {
    console.log(id)
    this.router.navigate(['/getUser', id]);
  }

  saveUser(id: string) {
    console.log(id)
    this.router.navigate(['/saveUser', id]);
  }

  remove(id) {
    this.originationService.removeUser(id).subscribe(result => {
      console.log(result);
      this.ngOnInit();
    }, error => console.error(error));
  }

}
