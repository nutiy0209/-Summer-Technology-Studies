import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        int [] price = new int [20];
        try {
            Path p = Paths.get("book.csv");
            File f = new File("book.csv");
            Scanner scanner = new Scanner(p, "UTF-8");
            FileWriter fw = new FileWriter("book1.csv");
            int i=0;
            fw.write(scanner.nextLine()+",discount\n");
            while (scanner.hasNextLine()){
                String line = scanner.nextLine();
                String [] cells = line.split(",");
                fw.write(line+",");
                int diprice = Integer.valueOf(cells[4]);
                fw.write(""+((int)(diprice*0.8))+"\n");
                System.out.println();
            }
            scanner.close();
            fw.close();
        } catch (IOException e) {
            System.out.println("An error occurred");
            e.printStackTrace();
        }
    }
}