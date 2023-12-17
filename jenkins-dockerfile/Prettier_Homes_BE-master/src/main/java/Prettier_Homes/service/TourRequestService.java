package Prettier_Homes.service;

import Prettier_Homes.dto.TourRequestDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TourRequestService {
   ResponseEntity<List<TourRequestDto>> getAllByUserId(Long userId);
}
