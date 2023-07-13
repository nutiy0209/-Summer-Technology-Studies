import java.util.Arrays;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random ran = new Random();
        int [] data = new int[20];
        for(int i=0;i<20;i++){
            data[i] = ran.nextInt(100);
        }
        System.out.println(Arrays.toString(data));
        Arrays.sort(data);
        System.out.println(Arrays.toString(data));
        System.out.println(Arrays.binarySearch(data,12));
        int[] newData = Arrays.copyOf(data, 25);
        System.out.println(Arrays.toString(newData));
        int[] newData2 = Arrays.copyOfRange(data,5,15);
        System.out.println(Arrays.toString(newData2));
        System.out.println(Arrays.hashCode(data));
        System.out.println(Arrays.hashCode(newData));
    }
}