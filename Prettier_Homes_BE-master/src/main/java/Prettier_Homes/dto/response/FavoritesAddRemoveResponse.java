package Prettier_Homes.dto.response;

import Prettier_Homes.dto.AdvertsDto;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FavoritesAddRemoveResponse {

    private Long id;

    private Boolean add;

    private Boolean remove;

    private Long advertId;

    private AdvertsDto advert;

}
