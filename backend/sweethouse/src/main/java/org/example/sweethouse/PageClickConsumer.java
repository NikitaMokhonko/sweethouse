package org.example.sweethouse;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Component
public class PageClickConsumer {

    private final Map<String, AtomicInteger> pageCounts = new ConcurrentHashMap<>();

    @KafkaListener(topics = "page-clicks", groupId = "sweethouse-group")
    public void consume(String page) {
        pageCounts.computeIfAbsent(page, k -> new AtomicInteger(0)).incrementAndGet();
        System.out.println("Received: " + page);
    }

    public Map<String, Integer> getStats() {
        return pageCounts.entrySet().stream()
                .collect(Collectors.toMap(Map.Entry::getKey, e -> e.getValue().get()));
    }
}
