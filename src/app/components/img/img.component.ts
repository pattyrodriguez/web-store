import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img = 'valor init';

  @Input()
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just image =>', this.img)
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault ='https://www.m2crowd.com/core/i/placeholder.png';
  // counter = 0;
  // counterFN: number | undefined;

  constructor(){
    //before render
    // No asyn -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges){
    //before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFN = window.setInterval(() =>{
    //   this.counter += 1;
    //   console.log('run counter')
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFN)
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }

}
