import { Injectable, signal } from '@angular/core';
import { ShipmentInformation } from '../interfaces/tracking/responseTrack';

@Injectable({
  providedIn: 'root'
})
export class ShipmentStateService {

  private readonly _shipment = signal<ShipmentInformation | null>(null);

  readonly shipment = this._shipment.asReadonly();

  set(shipment: ShipmentInformation) {
    this._shipment.set(shipment);
  }

  clear() {
    this._shipment.set(null);
  }
}