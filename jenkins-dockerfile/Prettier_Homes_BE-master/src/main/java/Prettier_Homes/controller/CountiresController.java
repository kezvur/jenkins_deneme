package Prettier_Homes.controller;

import Prettier_Homes.dto.CountriesDto;
import Prettier_Homes.dto.WordsDto;
import Prettier_Homes.service.CountriesService;
import Prettier_Homes.service.WordsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/countries")
@Slf4j
public class CountiresController {


    @Autowired
    CountriesService service;


    @GetMapping
    public ResponseEntity<List<CountriesDto>> getList(){
        return service.getList();
    }


//    @PostMapping
//    public ResponseEntity<WordsDto> create(@RequestBody WordsDto dto) {
//        return service.create(dto);
//    }
//
//
//    @GetMapping("/admin")
//    public ResponseEntity<Page<WordsDto>> getList(@RequestParam(value = "page", defaultValue = "0") int page,
//                                                  @RequestParam(value = "size", defaultValue = "10") int size,
//                                                  @RequestParam(value = "sort", defaultValue = "name") String sort,
//                                                  @RequestParam(value = "type", defaultValue = "desc") Sort.Direction direction ,
//                                                  @RequestParam(name ="q", required = false) String search) {
//        return service.getList(page,size,sort,direction,search);
//    }
//
//
//    @GetMapping("/{id}")
//    public ResponseEntity<WordsDto> getById(@PathVariable Long id) {
//        return service.getById(id);
//    }
//
//
//    @PutMapping("/id")
//    public ResponseEntity<WordsDto> update(@PathVariable Long id,
//                                           @RequestBody WordsDto dto) {
//        return service.update(id, dto);
//    }
//
//
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return service.delete(id);
    }

    // deneme branch

}

