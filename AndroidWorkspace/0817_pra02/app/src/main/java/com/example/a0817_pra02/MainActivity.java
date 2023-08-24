package com.example.a0817_pra02;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         Button button=findViewById(R.id.btn);
         button.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View view) {
                 dialog();
             }
             private void dialog(){
                 final String choose[]={"A","B","C","D","以上皆是"};
                 AlertDialog.Builder builder=new AlertDialog.Builder(MainActivity.this);
                 builder.setTitle("單選題");
                 builder.setSingleChoiceItems(choose, 0, new DialogInterface.OnClickListener() {
                     @Override
                     public void onClick(DialogInterface dialogInterface, int i) {
                         Toast.makeText(MainActivity.this,"選擇了")
                     }
                 })
             }
         });
    }
}