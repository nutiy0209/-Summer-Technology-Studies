<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(){
        $this->middleware('auth')->except('login','register');
    }

    public function me(){
        return response()->json(auth()->user());
    }
    public function register(Request $request){
        $userData = $request->all();
        $userData['password'] = Hash::make($userData['password']);
        $newUser = User::create($userData);
        return response($newUser);
    }

    public function login(){
        $credentials = request(['email','password']);
        $token = Auth::attempt($credentials);
        if(!$token)
            return response()->json(['message'=>'invalid credentials'], 401);
        $cookie = Cookie::create('token')->withValue($token)->withSameSite('none');
        return response()->json(['message' => 'success login'])->cookie($cookie);
    }

}
