<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'w2j-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showModal = false;

  toggleModal() {
    modalRef: this,
    this.showModal = !this.showModal;
    if (!this.showModal) {
      setTimeout(() => {
        this.load();
      }, 5);
    }
  }

  load() {
    location.reload();
  }
}
=======
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'w2j-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showModal = false;

  toggleModal() {
    modalRef: this,
    this.showModal = !this.showModal;
    if (!this.showModal) {
      setTimeout(() => {
        this.load();
      }, 5);
    }
  }

  load() {
    location.reload();
  }
}
>>>>>>> 8099684373b3a43d34fcb6c4d9b729d2d523e526
