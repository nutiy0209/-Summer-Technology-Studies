import java.util.Collections;
import java.util.Random;

import static com.sun.tools.javac.jvm.ByteCodes.breakpoint;
import static com.sun.tools.javac.jvm.ByteCodes.swap;
import static java.util.Collections.swap;

public class Main {
    public static void swap(int data[],int x,int y){
        int temp=data[x];
        data[x]=data[y];
        data[y]=temp;
    }

    static int sum(int data[],int i){
        if(i<0) return 0;
        return data[i] + sum(data,i-1);
    }

    static int binominal(int n,int m){

        return binominal(n-1,m)+binominal(n-1,m-1);
    }

    static int fibonacci(int n){
        if(n==1){
            return 0;
        }else if (n==2){
            return 1;
        }
        return fibonacci(n-1)+fibonacci(n-2);
    }

    static int factorial(int n){
        return n*factorial(n-1);
    }
    public static int min(int data[], boolean c[]) {
        int md = Integer.MAX_VALUE;
        int index = -1;
        for (int i = 0; i < data.length; i++) {
            if (!c[i] && data[i] < md) {
                md = data[i];
                index = i;
            }
        }
        if (index != -1) {
            c[index] = true;
        }
        return index;
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
        for (int i = 1; i < data.length; i++) {
            int p = data[i];
            int j = i - 1;
            while (j >= 0 && p < data[j]) {
                swap(data, j, j + 1);
                j--;
            }
        }
        for(int x:data){
            System.out.println(x);
        }
    }
    public static void selectSort(int data[],int data2[],boolean c[]){

        for(int i=0;i<20;i++){
            int index = min(data,c);
            data2[i]=data[index];
        }
        for(int x:data2){
            System.out.println(x);
        }
    }
    public static void main(String[] args) {

        Random ran = new Random();
        int [] data = new int[20];
        int [] data2 = new int[20];
        boolean [] c = new boolean[20];
        for(int i=0;i<20;i++){
            data[i] = ran.nextInt(100);
        }
        //bubbleSort
        //bubbleSort(data);
        //insertSort
        insertSort(data);
        //selectSort
        //selectSort(data,data2,c);
        //System.out.println(sum(data,19));
        //System.out.println(fibonacci(10));
    }
}