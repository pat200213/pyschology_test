<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{

    public function register(SignupRequest $request){
        $data = $request->validated();
        
        $user = User::create([
            'name' => $data['name'],
            'password' => bcrypt($data['password']),
            'email' => $data['email']
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request){
        $credential = $request->validated();

        if(!Auth::attempt($credential)){
            return response([
                'message' => 'Provided email or password is incorrect'
            ]);
        }
        
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function logout(Request $request){
        $user = $request->user();

        $user->currentAccessToken()->delete();
        return response('', 204);
    }

    public function forgotPassword(){

    }
}
