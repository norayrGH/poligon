package com.example.poligon.poligon.Controller;

import com.example.poligon.poligon.entity.Teacher;
import com.example.poligon.poligon.interfaces.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RequestMapping("/teacher")
@RestController
public class TeacherController {

@Autowired
    TeacherRepository teacherRepository;
@RequestMapping(value = "/insert", method = RequestMethod.POST)
public @ResponseBody
void teacherInser(@RequestBody Teacher teacher){



    teacherRepository.save(teacher);



}

}
