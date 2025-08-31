package org.example.sweethouse;

import org.example.sweethouse.PageClickConsumer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/stats")
public class StatsController {

    private final PageClickConsumer consumer;

    public StatsController(PageClickConsumer consumer) {
        this.consumer = consumer;
    }

    @GetMapping
    public Map<String, Integer> getStats() {
        return consumer.getStats();
    }
}
