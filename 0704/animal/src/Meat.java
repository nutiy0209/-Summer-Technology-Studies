interface Cookable{
    void cook();
}
public class Meat extends animal implements Cookable{
    public Meat(int s, String n) {
        super(s, n);
    }

    @Override
    public void cook() {
        System.out.println("meat is cook");
    }
}
