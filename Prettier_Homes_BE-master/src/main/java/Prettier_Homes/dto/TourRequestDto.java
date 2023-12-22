package Prettier_Homes.dto;

import Prettier_Homes.data.entity.AdvertsEntity;
import Prettier_Homes.data.entity.UserEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
public class TourRequestDto {

    private Long id;

    private UserEntity guestUser;

    private String status;

    private LocalDateTime createAt;

    private AdvertsEntity advert;

    private LocalDateTime tourTime;
    private LocalDateTime updateAt;


    private UserEntity ownerUser;

}
