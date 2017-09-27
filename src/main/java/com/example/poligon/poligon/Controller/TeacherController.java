package com.example.poligon.poligon.Controller;

import com.example.poligon.poligon.entity.Teacher;
import org.springframework.web.bind.annotation.*;
@RequestMapping("/teacher")
@RestController
public class TeacherController {


@RequestMapping(value = "/insert", method = RequestMethod.POST)
public @ResponseBody
void teacherInser(@RequestBody Teacher teacher){

}

}
