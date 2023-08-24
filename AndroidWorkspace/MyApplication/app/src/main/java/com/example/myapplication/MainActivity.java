package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private BluetoothDevice device;
    private BluetoothAdapter adapter;
    private String deviceName, deviceAddress;
    private TextView showDevice; // Moved here for broader scope

    @SuppressLint("")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        showDevice = findViewById(R.id.textView); // Initialize the TextView
        EditText dataText = findViewById(R.id.editTextTextPersonName);
        adapter = BluetoothAdapter.getDefaultAdapter();

        IntentFilter filter = new IntentFilter("android.bluetooth.devicepicker.action.DEVICE_SELECTED");

        // Register the BroadcastReceiver
        registerReceiver(receiver, filter);
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
    };

}
