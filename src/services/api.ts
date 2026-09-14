import axios from 'axios';
import type { Car, SearchParams, ReservationRequest, Reservation, PaymentSession } from '../types';

const api = axios.create({
  baseURL: '/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

export const carApi = {
  search: (params: SearchParams): Promise<Car[]> =>
    api.get('/cars/search', { params }).then(r => r.data),

  getDetails: (carId: string): Promise<Car> =>
    api.get(`/cars/${carId}`).then(r => r.data),
};

export const reservationApi = {
  create: (request: ReservationRequest): Promise<Reservation> =>
    api.post('/reservations', request).then(r => r.data),

  initiatePayment: (reservationId: string): Promise<PaymentSession> =>
    api.post('/reservations/payment/initiate', { reservationId }).then(r => r.data),
};
