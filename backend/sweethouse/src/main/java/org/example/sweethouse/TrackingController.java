package org.example.sweethouse;

import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/track")
public class TrackingController {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public TrackingController(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @PostMapping
    public ResponseEntity<String> trackPage(@RequestBody Map<String, String> payload) {
        String page = payload.get("page");
        kafkaTemplate.send("page-clicks", page);
        return ResponseEntity.ok().build();
    }
}
