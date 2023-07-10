import java.util.Collections;
import java.util.Random;

import static com.sun.tools.javac.jvm.ByteCodes.swap;
import static java.util.Collections.swap;

public class Main {
    public static void swap(int data[],int x,int y){
        int temp=data[x];
        data[x]=data[y];
        data[y]=temp;
    }
    public static void bubbleSort(int data[]){
        for(int i=19; i>0; i--){
            for(int j=0;j<i;j++){
                if(data[j]>data[j+1]){
                    swap(data,j,j+1);
                }
            }
        }
        for(int x:data){
            System.out.println(x);
        }
    }
    public static void insertSort(int data[]){
        for(int i=0;i<19;i++){
            int p=data[i];
            for(int j=i-1;j>0;j--){
                if(p>data[j]){
                    swap(data,j,j+1);
                }else {
                    data[j+1]=p;
                }
            }
        }
        for(int x:data){
            System.out.println(x);
        }
    }
    public static void selectSort(int data[]){
        int [] data2 = new int[20];
        boolean [] c = new boolean[20];
        for(int i=0;i<19;i++){
            for(int j=0;j<19;j++){

            }
        }
    }
    public static void main(String[] args) {

        Random ran = new Random();
        int [] data = new int[20];
        for(int i=0;i<20;i++){
            data[i] = ran.nextInt(100);
        }
        for(int i=0;i<20;i++){
            data[i] = ran.nextInt(100);
        }
        //bubbleSort
        //bubbleSort(data);
        //insertSort
    }

}