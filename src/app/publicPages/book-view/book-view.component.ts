import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CommonService } from '../../common.service';


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public selectedBook;
  constructor(private route: ActivatedRoute,
    private CommonService: CommonService,
    private location: Location) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(id);

    this.CommonService.getBookById(id)
      .subscribe(data => {

        this.selectedBook = data
        console.log(this.selectedBook);
      });


  }
  goBack(): void {
    this.location.back();
  }

}
