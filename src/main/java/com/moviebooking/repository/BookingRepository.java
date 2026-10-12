package com.moviebooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.moviebooking.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
