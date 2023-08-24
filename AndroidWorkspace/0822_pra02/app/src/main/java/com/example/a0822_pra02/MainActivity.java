package com.example.a0822_pra02;

import static java.lang.Thread.sleep;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothSocket;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.ParcelUuid;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class MainActivity extends AppCompatActivity {
    private BluetoothDevice device;
    private BluetoothAdapter adapter;
    private String deviceName, deviceAddress;
    private TextView showDevice;
    private EditText dataText;
    private BluetoothSocket socket;
    private ParcelUuid[] deviceUUid;
    private OutputStream os;
    private InputStream is;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        showDevice = findViewById(R.id.textView);
        dataText = findViewById(R.id.editTextTextPersonName);
        adapter = BluetoothAdapter.getDefaultAdapter();
        IntentFilter filter = new IntentFilter("android.bluetooth.devicepicker.action.DEVICE_SELECTED");
    }
    private BroadcastReceiver receiver = new BroadcastReceiver() {
        @SuppressLint("Missingpermission")
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            Log.d("taggg", "" + action);
            device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
            deviceName = device.getName();
            deviceAddress = device.getAddress();
            showDevice.setText("配對裝置:" + deviceName + "\n" + "位址:" + deviceAddress);
            try {
                device.createBond();
            } catch (Exception e) {
                Log.e("CreateBondError", e.getMessage());
            }
        }
        @SuppressLint("Missingpermission")
        public void pairDevice(View view) {
            if (!adapter.isEnabled()) {
                Toast.makeText(view.getContext(), "先開權限後再點擊按鈕", Toast.LENGTH_LONG).show();
                Intent intent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                startActivity(intent);
            }else{
                Toast.makeText(view.getContext(),"PairDevice",Toast.LENGTH_LONG).show();
                Intent bluetoothPicker = new Intent("android.bluetooth.devicepicker.action.LAUNCH");
                startActivity(bluetoothPicker);
            }
        }
        @SuppressLint("Missingpermission")
        public void sendData(View view) {
            try {
                deviceUUid = device.getUuids();
                Log.d("UUid","" + deviceUUid[0].getUuid());
                Log.d("UUidSize","" + deviceUUid.length);
                if(socket == null){
                    socket = device.createInsecureRfcommSocketToServiceRecord(deviceUUid[0].getUuid());
                    while (!socket.isConnected()){
                        try {
                            sleep(5000);
                            socket.connect();
                            Log.d("Connect State", ""+socket.isConnected());
                            if(socket.isConnected()){
                                Toast.makeText(getApplicationContext(),"連線成功",Toast.LENGTH_SHORT).show();
                            }
                        }catch (IOException | InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    os = socket.getOutputStream();
                    is = socket.getInputStream();
                }
                os.write(dataText.getText().toString().getBytes(StandardCharsets.UTF_8));
                Toast.makeText(getApplicationContext(),"已傳送字串",Toast.LENGTH_SHORT).show();
                Log.d("sendText",""+dataText.getText().toString().getBytes());
            }catch (Exception e){
                Log.d("Socket Error","" + e);
            }
        }
    };
}