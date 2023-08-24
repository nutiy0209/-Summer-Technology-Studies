package com.example.a0821_pra01;

import androidx.annotation.Nullable;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class sql extends SQLiteOpenHelper {

    private static final String DataBaseName = "users.db";
    private static final String DataBaseTable = "user";
    private static final int DataVaseVersion = 1;

    public sql(@Nullable Context context) {
        super(context, DataBaseName, null,  DataVaseVersion);
    }


    @Override
    public void onCreate(SQLiteDatabase db) {
        String Sqlcode = "CREATE TABLE IF NOT EXISTS user ("+
                "id_ INTEGER PRIMARY KEY AUTOINCREMENT,"+
                "account TEXT not null,"+
                "password TEXT not null"+
                ")";

        db.execSQL(Sqlcode);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int i, int i1) {
        db.execSQL("DROP TABLE IF EXISTS "+DataBaseName);
        onCreate(db);
    }
}