import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class streamEx {
    public static void main(String[] args){
        List<Integer> data = new ArrayList<>();
        Random rand = new Random();
        for(int i=0;i<20;i++)
            data.add(rand.nextInt(100));
        System.out.println(data);
        long count = data.size();
        System.out.println(count);
        int min = data.stream().min(Integer::compareTo).orElseThrow();
        System.out.println(min);
        List<Integer> newList = data.stream().filter( (x)-> x%2 == 0)
                .map((x)-> 2*x+1).collect(Collectors.toList());
        System.out.println(newList);
    }
}
