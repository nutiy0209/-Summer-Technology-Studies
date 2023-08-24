package com.example.a0821_pra01;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.ContentValues;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private sql dbHelper;
    private SQLiteDatabase db;
    EditText account_edit, pass_edit;
    Button save;
    String account, password;
    @SuppressLint({"WrongViewCast", "MissingInflatedId"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        account_edit = findViewById(R.id.account_text);
        pass_edit = findViewById(R.id.password_text);
        save = findViewById(R.id.button);


        save.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                account = account_edit.getText().toString();
                password = pass_edit.getText().toString();
                dbHelper = new sql(getApplicationContext());
                db = dbHelper.getWritableDatabase();

                ContentValues contentValues = new ContentValues();
                contentValues.put("account", account);
                contentValues.put("password", password);

                long rowID = db.insert("user", null,contentValues);

                if(rowID != -1) {
                    Toast.makeText(view.getContext(),"帳號新增成功", Toast.LENGTH_LONG).show();
                }else {
                    Toast.makeText(view.getContext(),"帳號新增失敗", Toast.LENGTH_LONG).show();
                }
            }
        });
    }
}