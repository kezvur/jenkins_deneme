package Prettier_Homes.service.Impl;

import Prettier_Homes.converter.TourRequestMapper;
import Prettier_Homes.data.repository.TourRequestRepository;
import Prettier_Homes.dto.TourRequestDto;
import Prettier_Homes.service.TourRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourRequestServiceImpl implements TourRequestService {

    @Autowired
    TourRequestRepository repository;

    @Autowired
    TourRequestMapper mapper;

    @Override
    public ResponseEntity<List<TourRequestDto>> getAllByUserId(Long userId) {
        return new ResponseEntity<>(mapper.toDto(repository.findByGuestUserId(userId)), HttpStatus.OK);
    }
}
