public class animal {
    private int speed;
    private String name;

    public animal (int s, String n){
        this.speed = s;
        this.name = n;
    }

    public int getSpeed() {
        return speed;
    }

    public String getName() {
        return name;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public void setName(String name) {
        this.name = name;
    }
}
