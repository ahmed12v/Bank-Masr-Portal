import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StateService {

  private readonly _awbNum = signal<string | null>(null);

  readonly awbNum = this._awbNum.asReadonly();


  set(value: string): void {
    console.log('SETTING STATE:', value);
    console.trace('WHO CALLED SET');
    this._awbNum.set(value);
  }


  clear(): void {
    this._awbNum.set(null);
     console.trace('STATE CLEAR CALLED');
  }

}