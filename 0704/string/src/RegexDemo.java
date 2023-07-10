import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexDemo {

    public static void main(String[] args) {
        String text = "Hello world! Hello Java! Hello everyone!";

        Pattern pattern = Pattern.compile("hello");//正規表達式
        Matcher matcher = pattern.matcher(text);

        while (matcher.find()) {
            System.out.println(matcher.group());
            System.out.println("Start index: " + matcher.start());
            System.out.println("End index: " + matcher.end());
        }
    }
}