import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';


@Component({
selector : 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.starWidth = this.rating *75 /5;
    }
onClick() : void{
    this.ratingClicked.emit('The Rating -' + (this.rating));
}

    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
}
