module com.example.demofx1 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.demofx1 to javafx.fxml;
    exports com.example.demofx1;
}