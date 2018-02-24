import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  @Input() colors;
  @Input() contrastColors;

  constructor(private domSanitizer: DomSanitizer ) { }

  ngOnInit() {
  }

  keys(value) {
    return Object.keys(value);
  }

  sanitize(style) {
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

}
