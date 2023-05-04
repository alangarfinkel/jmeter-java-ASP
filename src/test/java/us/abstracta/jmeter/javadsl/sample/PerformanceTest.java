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
            .maxThreads(100)
            .rampTo(1200, Duration.ofSeconds(60))
            .children(httpSampler("Obligatorio-asp-version-pro-env.eba-ibtcwv3k.us-east-1.elasticbeanstalk.com/purchase/64502405627a75cc3c121d92")   
            .param("startDate", "2023-01-01")
            .param("endDate", "2023-04-01")  
            .header("company-api-key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55TmFtZSI6IkFkaWRhczIiLCJpYXQiOjE2ODI5NzM2NjB9.Kd2mNUYzH6oBf4Gwn9jY2lmGA527Gs3z0CKt9bcFF-c")
            .header("company-id", "645023dc627a75cc3c121d6d")),
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
            .maxThreads(60)
            .rampTo(1200, Duration.ofSeconds(60))
            .children(httpSampler("Obligatorio-asp-version-pro-env.eba-ibtcwv3k.us-east-1.elasticbeanstalk.com/sales/top-products")
            .header("company-api-key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55TmFtZSI6IkFkaWRhczIiLCJpYXQiOjE2ODI5NzM2NjB9.Kd2mNUYzH6oBf4Gwn9jY2lmGA527Gs3z0CKt9bcFF-c")
            .header("company-id", "645023dc627a75cc3c121d6d")
            
        ),
            htmlReporter(reportsDirectory)).run();
        assertThat(stats.overall().sampleTimePercentile99()).isLessThan(Duration.ofMillis(350));
    }

}