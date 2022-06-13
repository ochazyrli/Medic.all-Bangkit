package com.bangkit.c22ps219.medicall.ui.main

import android.app.AlertDialog
import android.content.DialogInterface
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.view.*
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.bangkit.c22ps219.medicall.R
import com.bangkit.c22ps219.medicall.databinding.ActivityMainBinding
import com.bangkit.c22ps219.medicall.ui.chat.ChatFragment
import com.bangkit.c22ps219.medicall.ui.home.HomeFragment
import com.bangkit.c22ps219.medicall.ui.login.LoginActivity
import com.bangkit.c22ps219.medicall.ui.maps.MapsFragment
import com.bangkit.c22ps219.medicall.ui.scan.ScanFragment
import com.bumptech.glide.Glide
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import android.app.AlertDialog.Builder
import com.bangkit.c22ps219.medicall.mechat.ChatActivity
import com.bangkit.c22ps219.medicall.ui.maps.MapsFragment2
import com.bangkit.c22ps219.medicall.ui.scan.ScanActivity


class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val homeFragment = HomeFragment()
        val mapsFragment = MapsFragment()
        val scanFragment = ScanFragment()
        val chatFragment = ChatFragment()

        setCurrentFragment(homeFragment)

        binding.bottomNavigationView.setOnItemSelectedListener {
            when(it.itemId){
                R.id.home ->setCurrentFragment(homeFragment)
                R.id.location ->setCurrentFragment(mapsFragment)
                R.id.scan ->{
                    scanApp()
                    true
                }
                R.id.chat ->{
                    chatApp()
                    true
                }
            }
            true
        }

        auth = Firebase.auth
        val firebaseUser = auth.currentUser
        if (firebaseUser == null) {
            // Not signed in, launch the Login activity
            startActivity(Intent(this, LoginActivity::class.java))
            finish()
            return
        }

        setupView()

        if(firebaseUser.displayName == null){
            var usernames = firebaseUser.email.toString()
            val email = "@gmail.com"
            usernames = usernames.replace(email, "")
            binding.username.text = usernames
        } else {
            binding.username.text = firebaseUser.displayName.toString()
        }

        if(firebaseUser.photoUrl == null){
            Glide.with(applicationContext)
                .load(getImage("medicallogo"))
                .circleCrop()
                .into(binding.profileImage)
        } else {
            Glide.with(applicationContext)
                .load(firebaseUser.photoUrl)
                .circleCrop()
                .into(binding.profileImage)
        }

        binding.logout.setOnClickListener {
            showPopup()
        }

    }

    private fun showPopup() {
        val alert: AlertDialog.Builder = Builder(this@MainActivity)
        alert.setMessage("Apakah anda mau keluar?")
            .setPositiveButton("Logout", DialogInterface.OnClickListener { dialog, which ->
                signOut()
            }).setNegativeButton("Cancel", null)
        val alert1: AlertDialog = alert.create()
        alert1.show()
    }

    fun getImage(imageName: String?): Int {
        return resources.getIdentifier(imageName, "drawable", packageName)
    }

    private fun setupView() {
        @Suppress("DEPRECATION")
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.insetsController?.hide(WindowInsets.Type.statusBars())
        } else {
            window.setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
            )
        }
        supportActionBar?.hide()
    }

    private fun setCurrentFragment(fragment: Fragment)=
        supportFragmentManager.beginTransaction().apply {
            replace(R.id.flFragment,fragment)
            commit()
        }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        val inflater = menuInflater
        inflater.inflate(R.menu.main_menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.sign_out_menu -> {
                signOut()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun signOut() {
        auth.signOut()
        startActivity(Intent(this, LoginActivity::class.java))
        finish()
    }

    private fun chatApp() {
        startActivity(Intent(this, ChatActivity::class.java))
    }

    private fun scanApp() {
        startActivity(Intent(this, ScanActivity::class.java))
    }

}