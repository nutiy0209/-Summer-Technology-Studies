import java.security.SecureRandom;
import java.util.Random;

public class Main {
    //設計函數 產生骰子
    static int dice(){
        return (int)(Math.random()*6)+1;
    }
    public static void main(String[] args) {
        //迴圈累加 1 – 100
        sum();
        //設計函數 計算 n!
        factorial(3);
        //撰寫程式 計數 10000 次的擲骰子中有幾個 1 (不使用陣列)
        define(10000);
        //撰寫函數檢查是否為質數
        int number = 13;
        boolean isPrimeNumber = isPrime(number);
        System.out.println(number + " 是質數嗎? " + isPrimeNumber);
        //設計骰子以及二個骰子的函式，擲出 100000次二個骰子，統計各點的出現次數
        int totalRolls = 100000;
        int[] diceCounts = rollDice(totalRolls);
        System.out.println("擲出 100000次二個骰子，各點的出現次數:");
        for (int i = 2; i <= 12; i++) {
            System.out.println(i + ": " + diceCounts[i - 2]);
        }
        //使用陣列來產生 1 ~ 10000 的質數
        System.out.println("1 ~ 10000 的質數:");
        prime();
        //設計 可排序一個傳入陣列的函式
        System.out.println("排序陣列:");
        int [] data = new int[20];
        SecureRandom ran = new SecureRandom();
        for(int i=0; i<20;i++){
            data[i]=ran.nextInt(100);
        }
        insertionSort(data);
        for(int i=0; i<20;i++){
            System.out.println(data[i]);
        }
    }
    static void sum() {
        int sum = 0;
        for (int i=1;i<=100;i++){
            sum += i;
        }
        System.out.println("迴圈累加 1 – 100:"+ sum);
    }
    static void factorial(int n) {
        int sum = 1;
        for (int i=1;i<=n;i++){
            sum *= i;
        }
        System.out.println(n+"!:"+ sum);
    }
    static void define(int n){
        int sum = 0;

        for(int i=1;i<=n;i++) {

            if(dice() == 1) {
                sum++;
            }
        }
        System.out.println(n+"次的擲骰子中有"+sum+"個1");
    }

    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {//從2開始遍歷到該數字的平方根
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static int[] rollDice(int totalRolls) {
        int[] diceCounts = new int[11];
        Random random = new Random();

        for (int i = 0; i < totalRolls; i++) {
            int dice1 = random.nextInt(6) + 1;
            int dice2 = random.nextInt(6) + 1;
            int total = dice1 + dice2;

            diceCounts[total - 2]++;
        }

        return diceCounts;
    }
    static void prime() {
        boolean[] array = new boolean[10001];
        for(int i=0;i<=10000;i++){
            array[i] = true;
        }
        for(int i=2;i*i <= 10000;i++){
            if(array[i]){
                for(int j=i*i;j<=10000;j+=i){
                    array[j]=false;
                }
            }
        }
        for(int i=0;i<10000;i++){
            if(array[i]){
                System.out.println(i);
            }
        }
    }
    static void insertionSort(int [] value){
        int n = value.length;
        for(int i=0;i<n;++i){
            int key=value[i];
            int j = i - 1;
            while (j >= 0 && value[j] > key){
                value[j+1] = value[j];
                j= j-1;
            }
            value[j+1] = key;
        }
    }
}
