package com.bangkit.c22ps219.medicall.ui.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import com.bangkit.c22ps219.medicall.R

class HomeFragment : Fragment() {

    var sampleImages = intArrayOf(
        R.drawable.gambar1,
        R.drawable.gambar2,
        R.drawable.gambar3
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_home, container, false)
    }

}