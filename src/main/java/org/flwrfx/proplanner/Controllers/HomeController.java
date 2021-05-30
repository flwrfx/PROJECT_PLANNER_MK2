package org.flwrfx.proplanner.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {


    @RequestMapping("")
    public String index(Model model){
        //model.addAttribute("canvasses", canvasRepository.findAll());
        return "index";
    }

    @RequestMapping("canvas")//"index/{canvasID}"
    public String canvas(Model model){
        return "canvaspage";
    }

}
