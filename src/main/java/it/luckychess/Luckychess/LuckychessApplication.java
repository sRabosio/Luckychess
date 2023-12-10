package it.luckychess.Luckychess;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@Controller
public class LuckychessApplication {

	public static void main(String[] args) {
		SpringApplication.run(LuckychessApplication.class, args);
	}

	@GetMapping("/")
	public String homepage(){
		return "pages/homepage";
	}

	@GetMapping("/components/{componentName}")
	public String components(@PathVariable String componentName){
		var result = "components/" + componentName;
		return result;
	}



}