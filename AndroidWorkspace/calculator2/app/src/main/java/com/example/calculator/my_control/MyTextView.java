package com.example.calculator.my_control;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;

import androidx.annotation.Nullable;

public class MyTextView extends andriodx.appcompat.widget.AppCompatTextView {
    Paint paint = new Paint();
    public MyTextView(Context context,@Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        paint.setColor(Color.BLACK);

        canvas.drawLine(0,0,this.getWidth(),0,paint);
        canvas.drawLine(0,this.getHeight(),this.getWidth(),this.getHeight(),paint);
        canvas.drawLine(0,0,0,this.getHeight,paint);
        canvas.drawLine(this.getWidth(),0,this.getWidth(),this.getHeight(),paint);
    }
}
