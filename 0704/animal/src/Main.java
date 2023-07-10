
public class Main {
    public static void cancook(Cookable c1){
        c1.cook();
    }
    public static void main(String[] args) {

        Meat m = new Meat(10, "meat");
        cancook(m);
    }
}