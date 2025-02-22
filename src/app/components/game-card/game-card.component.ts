import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GameDetail } from 'src/app/interfaces/commons/GameDetail';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input('game') gameDetail: GameDetail;
  title: string;
  message: string;

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
