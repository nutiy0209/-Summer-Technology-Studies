package com.example.demofx1;

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.Slider;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class JavaFXApp extends Application {
    @Override
    public void start(Stage stage) {
        VBox root = new VBox(10);
        root.setPadding(new Insets(20));

        Text text = new Text("Hello, JavaFX!");
        text.setFont(Font.font(20));

        ComboBox<String> colorBox = new ComboBox<>();
        colorBox.getItems().addAll("Black", "Blue", "Red", "Green", "Purple");
        colorBox.setValue("Black");

        colorBox.valueProperty().addListener((obs, oldColor, newColor) -> {
            text.setFill(Color.valueOf(newColor));
        });

        Slider slider = new Slider(10, 100, 20);
        slider.setShowTickMarks(true);
        slider.setShowTickLabels(true);
        slider.setMajorTickUnit(10);

        slider.valueProperty().addListener((obs, oldSize, newSize) -> {
            text.setFont(Font.font(newSize.doubleValue()));
        });

        root.getChildren().addAll(new Label("Select color:"), colorBox, new Label("Select size:"), slider, text);

        Scene scene = new Scene(root, 300, 200);
        stage.setScene(scene);
        stage.setTitle("JavaFX App");
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
