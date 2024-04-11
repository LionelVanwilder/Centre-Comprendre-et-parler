<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\actualites;

class ActualitesController extends Controller
{
    public function index()
    {
        $actualites = actualites::all();
        return response()->json($actualites);
    }
}
