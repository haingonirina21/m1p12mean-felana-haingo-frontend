import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class AppointmentServiceService {
  private readonly apiUrl = `${api}/appointments`;
  constructor(private readonly http: HttpClient) {}
  createAppointment(
    clientId: string,
    vehicleId: string,
    date: string
  ): Observable<any> {
    const appointmentData = { clientId, vehicleId, date };
    return this.http.post<any>(this.apiUrl, appointmentData);
  }

  getAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allAppointments`);
  }
  fetchAppointmentDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  acceptAppointment(appointmentId: string): Observable<any> {
    console.log('service',appointmentId)
    const appointmentData = { appointmentId };
    return this.http.post<any>(`${this.apiUrl}/accept`, appointmentData);
  } 
}
