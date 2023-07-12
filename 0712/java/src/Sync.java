import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Sync {

    public static void main(String[] args) throws InterruptedException {
        // Synchronous processing
        System.out.println("Starting synchronous processing...");
        long startTime = System.currentTimeMillis();
        String result = doSynchronousProcessing();
        long endTime = System.currentTimeMillis();
        System.out.println("Synchronous processing finished in " + (endTime - startTime) + " milliseconds");

        // Asynchronous processing
        System.out.println("Starting asynchronous processing...");
        startTime = System.currentTimeMillis();
        long finalStartTime = startTime;
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    String result = doAsynchronousProcessing();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("Asynchronous processing finished in " + (System.currentTimeMillis() - finalStartTime) + " milliseconds");
            }
        });
        thread.start();

        // Do other things while the asynchronous processing is happening
        System.out.println("Doing other things...");
        Thread.sleep(2000);

        System.out.println("The result is: " + result);
    }

    private static String doSynchronousProcessing() throws InterruptedException {
        // This is a synchronous method that takes some time to execute
        Thread.sleep(2000);
        return "The result of the synchronous processing";
    }

    private static String doAsynchronousProcessing() throws InterruptedException {
        // This is an asynchronous method that takes some time to execute
        Thread.sleep(2000);
        return "The result of the asynchronous processing";
    }
}
