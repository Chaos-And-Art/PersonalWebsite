import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupTypes } from 'src/app/models/popupTypes';

@Component({
  selector: 'app-popups',
  templateUrl: './dialogPopups.component.html',
  styleUrls: ['./dialogPopups.component.scss']
})
export class DialogPopupsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupTypes) { }

  ngOnInit(): void {
  }

}
