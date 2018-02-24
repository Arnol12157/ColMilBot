import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

/**
 * Service for informing about resizing of layout
 */
@Injectable()
export class ResizeService {

  resizeInformer$ = new Subject();

  constructor() {
  }

}
