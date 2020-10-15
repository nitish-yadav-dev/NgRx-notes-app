import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @Output() visibleNotes = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  toggleCards(cardType: string) {
    this.visibleNotes.emit(cardType);
  }
}
