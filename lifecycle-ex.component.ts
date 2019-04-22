import {
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Component,
    SimpleChanges,
    ChangeDetectorRef
} from '@angular/core';
import { DataService } from './data.service';
import { postData, respData} from './postdataObj';
@Component({
    selector: 'lifecycle-ex',
    templateUrl: './lifecycle-ex.html',
    styleUrls: ['./lifecycle-ex.css'],
  })

  export class lifecycleExComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
      data:number = 100; 
      parentValue:string = "Mr. Meeting";
      posData:postData;
      resultData: respData;
  constructor(private cd: ChangeDetectorRef, private dataService: DataService) {
      
    console.log("new - data is ${this.data}: " + this.data);
}
ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges - data is ${this.data}: " + this.data);
}
ngOnInit() {
    console.log("ngOnInit  - data is ${this.data}: " + this.data);
}
ngDoCheck() {
    console.log("ngDoCheck")
}
ngAfterContentInit() {
    console.log("ngAfterContentInit");
}
ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
}
ngAfterViewInit() {
    console.log("ngAfterViewInit");
}
ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
}
ngOnDestroy() {
    console.log("ngOnDestroy");
}
fnAddNumber():void{
    this.data+=100;
    this.parentValue = "Mr. Meeting Changed";
    //this.cd.detectChanges();
    //posData = new this.posData();
    this.posData = new postData();
    this.posData.body = "test data2";
    this.posData.title = "Some Title";
    this.posData.userId = 13;
    this.dataService.addPost(this.posData).subscribe((res : respData)=>{
        this.resultData = res;
        console.log(this.resultData.id);
      });
}
deleteNumber():void{
    this.data -=10;
}

}