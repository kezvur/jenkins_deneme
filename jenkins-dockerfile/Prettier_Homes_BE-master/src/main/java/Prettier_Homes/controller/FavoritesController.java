package Prettier_Homes.controller;


import Prettier_Homes.dto.AdvertsDto;
import Prettier_Homes.dto.FavoritesDto;
import Prettier_Homes.dto.response.AdvertCartRespons;
import Prettier_Homes.dto.response.FavoritesAddRemoveResponse;
import Prettier_Homes.security.JwtUserDetails;
import Prettier_Homes.service.FavoritesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favorites")
@Slf4j
public class FavoritesController {

    @Autowired
    FavoritesService service;

    @GetMapping("/auth") //bitti K01
    public ResponseEntity<List<AdvertsDto>> getListForUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();

        Long id = jwtUserDetails.getId();
        return service.getListForUser(id);
    }

   // @PreAuthorize("h")
    @GetMapping("/admin/{userId}") //bitti K02
    public ResponseEntity<Page<AdvertCartRespons>> getListAdmin(@PathVariable Long userId,
                                                                @RequestParam(value = "page", defaultValue = "0",required = false) int page,
                                                                @RequestParam(value = "size", defaultValue = "10",required = false) int size,
                                                                @RequestParam(value = "sort", defaultValue = "title",required = false) String sort,
                                                                @RequestParam(value = "direction", defaultValue = "ASC",required = false) Sort.Direction direction){
        System.out.println(userId);
        return service.getListAdmin(userId, page, size, sort, direction);
    }

    @PostMapping("/admin/{id}/auth")
    public ResponseEntity<FavoritesAddRemoveResponse> addOrRemoveFavorite(@PathVariable Long advertId) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();

        Long id = jwtUserDetails.getId();

        return service.addOrRemoveFavorite(advertId,id);



    }

    @DeleteMapping("/auth")
    public ResponseEntity<FavoritesDto> deleteAuth() {
        return service.deleteAuth();
    }

    @DeleteMapping("/admin")
    public ResponseEntity<FavoritesDto> deleteAdmin() {
        return service.deleteAdmin();
    }

    @DeleteMapping("/{id}/admin")
    public ResponseEntity<FavoritesDto> deleteIdAdmin() {
        return service.deleteIdAdmin();
    }



}

