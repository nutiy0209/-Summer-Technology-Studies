package com.example.a0817_pra01;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity2 extends AppCompatActivity {
    private Button bt4;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        bt4=findViewById(R.id.bt4);
        bt4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                AlertDialog.Builder alerDialog = new AlertDialog.Builder(MainActivity2.this);
                String[] str = {"太陽","月亮","地球","火星"};
                alerDialog.setTitle("列表對話框");
                alerDialog.setItems(str, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Toast.makeText(MainActivity2.this,"你選擇了"+str[i],Toast.LENGTH_LONG).show();
                    }
                });
                alerDialog.show();
            }
        });

    }
}