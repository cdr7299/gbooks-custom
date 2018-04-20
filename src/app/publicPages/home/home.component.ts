import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public queryBy: any = 0;
  constructor(private CommonService: CommonService, private router: Router) { }

  public books: any = [];
  public flag = false;
  private queryParameter: string;
  public selectedBook: any;
  ngOnInit() {
    // this.onClickMe();
  }

  onKey(event: any) {
    // var e = document.getElementById("filter");
    // var strUser = e.options[e.selectedIndex].value;

    // console.log(strUser);
    let filter = this.queryBy;
    this.CommonService.filter = filter; 

    this.CommonService.getBooks(event.target.value,filter).subscribe
      (data => {
        this.books = data.items.slice(0, 5);
        this.flag = true;
      });

  }
  getList() {
    if (this.queryParameter == '' || this.queryParameter == null) {
      this.router.navigateByUrl('/search');

    }
    else {
      this.router.navigateByUrl('/search/' + this.queryParameter);
    }
  }


  onSelect(book): void {
    this.selectedBook = book;
    console.log(this.selectedBook);
  }

}
