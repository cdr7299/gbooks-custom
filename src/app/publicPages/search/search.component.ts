import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
// import {}
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private books: any = []
  public data: any = []
  constructor(private route: ActivatedRoute,
    private CommonService: CommonService,
    private location: Location) { }

  ngOnInit() {
    const query = this.route.snapshot.paramMap.get('query');
    // console.log(query);

    // this.CommonService.getBooks
    let filter = this.CommonService.filter;
    this.CommonService.getBooks(query, filter).subscribe
      (data => {
        this.books = data;
        // this.flag = true;
      });

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.display();
    }, 100);

    // console.log(this.books)
  }


  display() {
    const query = this.route.snapshot.paramMap.get('query');

    // console.log(this.books);
    let filter = this.CommonService.filter;
    
    if (this.books.length > 0) { this.data = this.books; }
    else {
      this.CommonService.getBooks(query, filter).subscribe
        (data => {
          this.data = data;
        });
    }

  }




}
