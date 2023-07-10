import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Rectangle;
import javafx.scene.shape.Shape;
import javafx.stage.Stage;
import java.util.Arrays;
import java.util.List;



public class Main extends Application {
    @Override
    public void start(Stage primaryStage) ;


        Pane root = new Pane();



        // Define some shapes

        Circle circle = new Circle(50, 50, 30); // Circle with center at (50,50) and radius 30

        Rectangle rectangle = new Rectangle(100, 100, 50, 60); // Rectangle with top left at (100,100), width 50 and height 60



        // Add shapes to a list

        List<Shape> shapes = Arrays.asList(circle, rectangle);



        // Add shapes to the root pane

        root.getChildren().addAll(shapes);



        // For each shape, print its type and area

        for (Shape shape : shapes) {

            String type = shape.getClass().getSimpleName(); // Get class name

            double area;



            // Calculate area based on type of shape

            if (shape instanceof Circle) {

                Circle c = (Circle) shape;

                area = Math.PI * Math.pow(c.getRadius(), 2);

            } else if (shape instanceof Rectangle) {

                Rectangle r = (Rectangle) shape;

                area = r.getWidth() * r.getHeight();

            } else {

                area = 0; // Default for other shapes

            }



            System.out.println("Shape: " + type + ", Area: " + area);

        }



        // Create scene and show stage

        primaryStage.setScene(new Scene(root, 200, 200));

        primaryStage.show();

    }



    public static void main(String[] args) {

        launch(args);

    }

}