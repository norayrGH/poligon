package com.example.poligon.poligon.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class StartController {


    @RequestMapping(value = "/")
    public String indexAction(){

        return"index.html";
    }
}
