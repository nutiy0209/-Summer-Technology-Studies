import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.TreeSet;

public class SetEx {
    public static void main(String[] args){
        Set<Integer> hashSet = new TreeSet<>();
        Random rand = new Random();
        for(int i=0;i<20;i++){
            hashSet.add(rand.nextInt(50));
        }
        System.out.println("Size:" + hashSet.size()+" HashSet:");
        for(Integer x: hashSet){
            System.out.print(x+",");
        }
    }
}
