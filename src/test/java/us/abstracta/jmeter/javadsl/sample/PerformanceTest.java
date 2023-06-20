package us.abstracta.jmeter.javadsl.sample;

import static org.assertj.core.api.Assertions.assertThat;
import static us.abstracta.jmeter.javadsl.JmeterDsl.*;

import java.io.IOException;
import java.time.Duration;
import org.junit.jupiter.api.Test;
import us.abstracta.jmeter.javadsl.core.TestPlanStats;
import java.io.File;
import org.apache.commons.io.FileUtils;
import org.apache.http.entity.mime.Header;
import us.abstracta.jmeter.javadsl.http.*;

public class PerformanceTest {

      @Test
    public void testPerformanceREQ10() throws IOException {
        String reportsDirectory = "./reports/PerformanceREQ10";
        FileUtils.deleteDirectory(new File(reportsDirectory));
        TestPlanStats stats = testPlan(
            rpsThreadGroup()
            .maxThreads(1000)
            .rampToAndHold(20, Duration.ofSeconds(10), Duration.ofSeconds(60))            
            .children(httpSampler("http://Obligatorio-asp-inventory-env.eba-jwumgmmi.us-east-1.elasticbeanstalk.com/purchase/6490ee2c014c3be985acf0fd")   
            .param("startDate", "2023-01-01")
            .param("endDate", "2023-04-01")  
            .header("company-api-key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55TmFtZSI6IkNvbXBhbnkgMSIsImlhdCI6MTY4NzIxNzU5N30.e6D6IGT7pmNyQVBRrEhTJcRgH-l4lrkUvJpXezqLwf4")
            .header("company-id", "6490e5bd4904ab2dc977a7cf")),
            htmlReporter(reportsDirectory)
        ).run();
        assertThat(stats.overall().sampleTimePercentile99()).isLessThan(Duration.ofMillis(350));
    }

  @Test
    public void testPerformanceREQ11() throws IOException {
        String reportsDirectory = "./reports/PerformanceREQ11";
        FileUtils.deleteDirectory(new File(reportsDirectory));
        TestPlanStats stats = testPlan(
            rpsThreadGroup()
            .maxThreads(600)
            .rampToAndHold(20, Duration.ofSeconds(10), Duration.ofSeconds(60))            
            .children(httpSampler("http://Obligatorio-asp-inventory-env.eba-jwumgmmi.us-east-1.elasticbeanstalk.com/sales/top-products")
            .header("company-api-key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55TmFtZSI6IkNvbXBhbnkgMSIsImlhdCI6MTY4NzIxNzU5N30.e6D6IGT7pmNyQVBRrEhTJcRgH-l4lrkUvJpXezqLwf4")
            .header("company-id", "6490e5bd4904ab2dc977a7cf")
            
        ),
            htmlReporter(reportsDirectory)).run();
        assertThat(stats.overall().sampleTimePercentile99()).isLessThan(Duration.ofMillis(350));
    }

}