package org.example.sweethouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class})
public class SweethouseApplication {
	public static void main(String[] args) {
		SpringApplication.run(SweethouseApplication.class, args);
	}
}
