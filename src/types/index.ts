export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  category: string;
  seats: number;
  transmission: 'MANUAL' | 'AUTOMATIC';
  fuelType: string;
  imageUrl?: string;
  pricePerDay: number;
  depositAmount: number;
  features: string[];
}

export interface Extra {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
}

export interface SearchParams {
  pickupDate: string;
  returnDate: string;
  pickupLocation?: string;
  category?: string;
}

export interface ReservationRequest {
  carId: string;
  pickupDate: string;
  returnDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  extraIds?: string[];
}

export interface Reservation {
  id: string;
  externalReservationId: string;
  carId: string;
  pickupDate: string;
  returnDate: string;
  customerName: string;
  customerEmail: string;
  depositAmount: number;
  status: 'PENDING_PAYMENT' | 'DEPOSIT_PAID' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
}

export interface PaymentSession {
  providerPaymentId: string;
  redirectUrl: string;
}
