import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rxjs-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiStepComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
