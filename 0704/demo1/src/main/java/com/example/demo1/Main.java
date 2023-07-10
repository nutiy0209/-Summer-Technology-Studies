package com.example.demo1;
import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Line;
import javafx.scene.shape.Rectangle;
import javafx.scene.shape.Shape;
import javafx.stage.Stage;

public class Main extends Application {
    @Override

    public void start(Stage primaryStage) {
        Group root = new Group();
        Scene scene = new Scene(root, 400, 400);
        // Define some shapes
        Circle circle = new Circle(50, 50, 30); // Circle with center at (50,50) and radius 30
        circle.setFill(Color.BROWN);
        circle.setStroke(Color.GOLD);
        circle.setFill(Color.TURQUOISE);
        Rectangle rectangle = new Rectangle(300, 200, 50, 80); // Rectangle with top left at (100,100), width 50 and height 60
        // Add shapes to a list
        rectangle.setFill(Color.GOLD);
        Shape [] shs = new Shape[3];
        shs[0] = circle;
        shs[1] = rectangle;
        shs[2] = new Line(30,30,300,30);
        shs[2].setStroke(Color.GOLD);
        for(Shape s : shs){
            if(s instanceof Circle){
                Circle sc = (Circle) s;
                sc.setRadius(20);
            }
            root.getChildren().add(s);
        }




        // Create scene and show stage

        primaryStage.setScene(scene);
        primaryStage.show();

    }



    public static void main(String[] args) {

        launch(args);

    }

}