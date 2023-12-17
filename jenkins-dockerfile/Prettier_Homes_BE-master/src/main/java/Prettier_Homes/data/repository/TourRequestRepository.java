package Prettier_Homes.data.repository;

import Prettier_Homes.data.entity.TourRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface TourRequestRepository extends JpaRepository<TourRequestEntity, Long> {
    List<TourRequestEntity> findByGuestUserId(Long userId);

    void deleteByAdvertId(Long id);
}
