import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('editID')) {
        console.log(paramMap.get('editID'));
      }
    })
  }

}
