import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class podStateService{
     private readonly _status = signal<string | null>(null);

  readonly status = this._status.asReadonly();

  set(status: string | null): void {
    this._status.set(status);
  }

  clear(): void {
    this._status.set(null);
  }
}